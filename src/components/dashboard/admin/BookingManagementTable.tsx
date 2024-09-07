import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';

import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Pagination from '@/components/ui/Pagination';
import { useGetAllBookingsQuery } from '@/redux/features/booking/bookingApi';
import { TBooking } from '@/types/bookingData.type';
import { Badge } from '@/components/ui/badge';

const BookingManagementTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const { data: bookingsData, isLoading: isBookingsLoading } =
    useGetAllBookingsQuery({
      page: currentPage,
      limit: itemsPerPage,
    });
  const bookings: TBooking[] = bookingsData?.data || [];
  const meta = bookingsData?.meta || {};

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns: ColumnDef<TBooking>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) =>
            table.toggleAllPageRowsSelected(!!value)
          }
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorKey: 'room.roomName',
      header: 'Room Name',
      cell: ({ row }) => {
        const roomName = row.original?.room?.roomName;
        return (
          <div className="capitalize whitespace-nowrap">{roomName}</div>
        );
      },
    },

    {
      accessorKey: 'user.name',
      header: 'User Name',
      cell: ({ row }) => {
        const userName = row.original?.user?.name;
        return (
          <div className="capitalize whitespace-nowrap">{userName}</div>
        );
      },
    },

    {
      accessorKey: 'slots',
      header: 'Slot Date & Times',
      cell: ({ row }) => {
        const slots = row.original?.slots || [];
        return (
          <div>
            {slots.map((slot: any, index: number) => (
              <div
                className="whitespace-nowrap"
                key={`${slot._id}-${index}`}
              >
                {slot.date} / {slot.startTime} - {slot.endTime}
              </div>
            ))}
          </div>
        );
      },
    },

    {
      accessorKey: 'isConfirmed',
      header: 'Status',
      cell: ({ row }) => {
        return (
          <div className="capitalize whitespace-nowrap">
            {row.getValue('isConfirmed')}
          </div>
        );
      },
    },

    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const id = row.original._id;
        return (
          <div className="flex items-center gap-4">
            <button>
              <Badge variant="default">Approve</Badge>
            </button>
            <button>
              <Badge variant="destructive">Delete</Badge>
            </button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: bookings,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
    },
  });

  if (isBookingsLoading) return <LoadingSpinner />;

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* pagination */}
      <div className="flex justify-start">
        <Pagination
          currentPage={currentPage}
          totalPages={meta?.totalPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export default BookingManagementTable;
