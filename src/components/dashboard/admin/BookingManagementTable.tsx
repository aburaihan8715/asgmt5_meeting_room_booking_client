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

  console.log(bookings);
  console.log(meta);

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
      accessorKey: 'room.name',
      header: 'Room Name',
      cell: ({ row }) => {
        const roomName = row.original?.room?.name;
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
      header: 'Slot Date',
      cell: ({ row }) => {
        const slots = row.original?.slots || [];
        return (
          <div>
            {slots.map((slot: any, index: number) => (
              <div
                className="whitespace-nowrap"
                key={`${slot._id}-${index}`}
              >
                {slot.date}
              </div>
            ))}
          </div>
        );
      },
    },

    {
      id: 'slots time',
      header: 'Slot Times',
      cell: ({ row }) => {
        const slots = row.original?.slots || [];
        return (
          <div>
            {slots.map((slot: any, index: number) => (
              <div
                className="whitespace-nowrap"
                key={`${slot._id}-${index}`}
              >
                {slot.startTime} - {slot.endTime}
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
          <div className="whitespace-nowrap capitalize">
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
        console.log(id);
        return (
          <div className="flex items-center gap-4">
            <button>Approve</button>
            <button>Reject</button>
            <button>Delete</button>
          </div>
        );
      },
    },
  ];

  // const columns2: ColumnDef<TRoom>[] = [
  //   {
  //     id: 'select',
  //     header: ({ table }) => (
  //       <Checkbox
  //         checked={
  //           table.getIsAllPageRowsSelected() ||
  //           (table.getIsSomePageRowsSelected() && 'indeterminate')
  //         }
  //         onCheckedChange={(value) =>
  //           table.toggleAllPageRowsSelected(!!value)
  //         }
  //         aria-label="Select all"
  //       />
  //     ),
  //     cell: ({ row }) => (
  //       <Checkbox
  //         checked={row.getIsSelected()}
  //         onCheckedChange={(value) => row.toggleSelected(!!value)}
  //         aria-label="Select row"
  //       />
  //     ),
  //     enableSorting: false,
  //     enableHiding: false,
  //   },

  //   {
  //     accessorKey: 'name',
  //     header: 'Room Name',
  //     cell: ({ row }) => (
  //       <div className="capitalize">{row.getValue('name')}</div>
  //     ),
  //   },

  //   {
  //     accessorKey: 'roomNo',
  //     header: 'Room No.',
  //     cell: ({ row }) => (
  //       <div className="capitalize">{row.getValue('roomNo')}</div>
  //     ),
  //   },

  //   {
  //     accessorKey: 'floorNo',
  //     header: 'Floor No.',
  //     cell: ({ row }) => <div className="">{row.getValue('floorNo')}</div>,
  //   },

  //   {
  //     accessorKey: 'capacity',
  //     header: 'Capacity',
  //     cell: ({ row }) => (
  //       <div className="">{row.getValue('capacity')}</div>
  //     ),
  //   },

  //   {
  //     accessorKey: 'pricePerSlot',
  //     header: () => <div className="text-right">Price Per Slot</div>,
  //     cell: ({ row }) => {
  //       const amount = parseFloat(row.getValue('pricePerSlot'));

  //       // Format the amount as a dollar amount
  //       const formatted = new Intl.NumberFormat('en-US', {
  //         style: 'currency',
  //         currency: 'USD',
  //       }).format(amount);

  //       return <div className="text-right font-medium">{formatted}</div>;
  //     },
  //   },

  //   {
  //     id: 'actions',
  //     header: 'Actions',
  //     cell: ({ row }) => {
  //       const id = row.original._id;
  //       console.log(id);
  //       return (
  //         <div className="flex items-center gap-4">
  //           <button>
  //             <FaEdit className="text-xl text-primary" />
  //           </button>
  //           <button>
  //             <FaRegTrashCan className="text-xl text-red-500" />
  //           </button>
  //         </div>
  //       );
  //     },
  //   },
  // ];

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
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
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

      <div className="rounded-md border">
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
