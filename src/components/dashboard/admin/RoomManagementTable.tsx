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
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';
import {
  useDeleteRoomMutation,
  useGetAllRoomsQuery,
} from '@/redux/features/room/roomApi';
import { TRoom } from '@/types';
import { FaRegTrashCan } from 'react-icons/fa6';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useDebouncedCallback } from 'use-debounce';
import Pagination from '@/components/ui/Pagination';
import RoomUpdateModal from './RoomUpdateModal';
import Swal from 'sweetalert2';

const RoomManagementTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const searchDebounce = useDebouncedCallback((value) => {
    setSearchQuery(value);
  }, 1000);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const { data: roomsData, isLoading: isRoomsLoading } =
    useGetAllRoomsQuery({
      searchQuery,
      page: currentPage,
      limit: itemsPerPage,
    });

  const [deleteRoom] = useDeleteRoomMutation();
  const rooms: TRoom[] = roomsData?.data || [];
  const meta = roomsData?.meta || {};

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleDeleteRoom = async (id: string) => {
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
      await deleteRoom(id);
      Swal.fire({
        title: 'Deleted!',
        text: 'Your room has been deleted.',
        icon: 'success',
      });
    }
  };

  const columns: ColumnDef<TRoom>[] = [
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
      accessorKey: 'roomName',
      header: 'Room Name',
      cell: ({ row }) => (
        <div className="capitalize whitespace-nowrap">
          {row.getValue('roomName')}
        </div>
      ),
    },

    {
      accessorKey: 'roomNo',
      header: 'Room No.',
      cell: ({ row }) => (
        <div className="capitalize whitespace-nowrap">
          {row.getValue('roomNo')}
        </div>
      ),
    },

    {
      accessorKey: 'floorNo',
      header: 'Floor No.',
      cell: ({ row }) => <div className="">{row.getValue('floorNo')}</div>,
    },

    {
      accessorKey: 'capacity',
      header: 'Capacity',
      cell: ({ row }) => (
        <div className="">{row.getValue('capacity')}</div>
      ),
    },

    {
      accessorKey: 'pricePerSlot',
      header: () => <div className="text-right">Price Per Slot</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue('pricePerSlot'));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount);

        return <div className="font-medium text-right">{formatted}</div>;
      },
    },

    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const id = row.original._id;
        return (
          <div className="flex items-center gap-4">
            <RoomUpdateModal id={id} />
            <button onClick={() => handleDeleteRoom(id)}>
              <FaRegTrashCan className="text-xl text-red-500" />
            </button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: rooms,
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

  if (isRoomsLoading) return <LoadingSpinner />;

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4 py-4 md:flex-row">
        <Input
          type="search"
          name="search"
          id="search"
          onChange={(e) => searchDebounce(e.target.value)}
          placeholder="Search by room name..."
          className="md:max-w-sm"
        />

        <div className="flex-1 w-full md:max-w-sm">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="py-[21px] w-full flex justify-between"
              >
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
export default RoomManagementTable;
