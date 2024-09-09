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
import {
  useDeleteBookingFromDBMutation,
  useGetAllBookingsQuery,
  useUpdateBookingConfirmedIntoDBMutation,
} from '@/redux/features/booking/bookingApi';
import { TBooking } from '@/types/bookingData.type';
import { Badge } from '@/components/ui/badge';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

const BookingManagementTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const [deleteBookingFromDB] = useDeleteBookingFromDBMutation();
  const [updateBookingConfirmedIntoDB] =
    useUpdateBookingConfirmedIntoDBMutation();
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

  const handleApprove = async (id: string) => {
    const toastId = toast.loading('loading...');
    try {
      await updateBookingConfirmedIntoDB({
        id,
        data: { isConfirmed: 'confirmed' },
      });
      toast.success('Booking approved!', { id: toastId, duration: 2000 });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  const handleDeleteBooking = async (id: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      console.log(id);
      await deleteBookingFromDB(id);
      Swal.fire({
        title: 'Deleted!',
        text: 'Your slot has been deleted.',
        icon: 'success',
      });
    }
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
        const booking = row.original;
        return (
          <div className="flex items-center gap-4">
            <button
              disabled={booking?.isConfirmed === 'confirmed'}
              onClick={() => handleApprove(booking?._id)}
              className={`${
                booking?.isConfirmed === 'confirmed'
                  ? 'cursor-not-allowed'
                  : ''
              }`}
            >
              <Badge variant="default">Approve</Badge>
            </button>
            <button
              disabled={booking?.isConfirmed === 'confirmed'}
              onClick={() => handleDeleteBooking(booking?._id)}
              className={`${
                booking?.isConfirmed === 'confirmed'
                  ? 'cursor-not-allowed'
                  : ''
              }`}
            >
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
