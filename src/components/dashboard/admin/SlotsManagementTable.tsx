import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
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

import { FaRegTrashCan } from 'react-icons/fa6';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

import Pagination from '@/components/ui/Pagination';
import {
  useDeleteSlotFromDBMutation,
  useGetAllSlotsQuery,
} from '@/redux/features/slot/slotApi';
import { TSlot } from '@/types/slotData.type';
import Swal from 'sweetalert2';
import SlotUpdateModal from './SlotUpdateModal';
import { useGetAllRoomsQuery } from '@/redux/features/room/roomApi';
import { TRoom } from '@/types';

export type TRoomOptions = {
  label: string;
  value: string;
};

const SlotsManagementTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [filterByRoom, setFilterByRoom] = useState('');
  const [filterByDate, setFilterByDate] = useState('');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const { data: datesData, isLoading: isDatesLoading } =
    useGetAllSlotsQuery({});

  const uniqueDates = [
    ...new Set(datesData?.data?.map((item: TSlot) => item.date)),
  ];

  const { data: slotsData, isLoading: isSlotsLoading } =
    useGetAllSlotsQuery({
      page: currentPage,
      limit: itemsPerPage,
      filterByRoom,
      filterByDate,
    });

  const { data: roomsData, isLoading: isRoomsLoading } =
    useGetAllRoomsQuery({});

  const roomsOptions: TRoomOptions[] = roomsData?.data.map(
    (item: TRoom) => {
      return {
        label: item?.roomName,
        value: item?._id,
      };
    }
  );
  const [deleteSlotFromDB] = useDeleteSlotFromDBMutation();

  const slots: TSlot[] = slotsData?.data || [];
  const meta = slotsData?.meta || {};

  const dateOptions = uniqueDates?.map((date) => date as string);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDeleteSlot = async (id: string) => {
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
      await deleteSlotFromDB(id);
      Swal.fire({
        title: 'Deleted!',
        text: 'Your slot has been deleted.',
        icon: 'success',
      });
    }
  };

  const columns: ColumnDef<TSlot>[] = [
    // for check
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
      accessorKey: 'room.roomNo',
      header: 'Room No',
      cell: ({ row }) => {
        const roomNo = row.original?.room?.roomNo;
        return <div className="capitalize">{roomNo}</div>;
      },
    },
    {
      accessorKey: 'room.floorNo',
      header: 'Floor No.',
      cell: ({ row }) => {
        const floorNo = row.original?.room?.floorNo;
        return <div className="capitalize">{floorNo}</div>;
      },
    },
    {
      accessorKey: 'date',
      header: 'Date',
      cell: ({ row }) => (
        <div className="whitespace-nowrap">{row.getValue('date')}</div>
      ),
    },
    {
      accessorKey: 'startTime',
      header: 'Start Time',
      cell: ({ row }) => (
        <div className="capitalize whitespace-nowrap">
          {row.getValue('startTime')}
        </div>
      ),
    },
    {
      accessorKey: 'endTime',
      header: 'End Time',
      cell: ({ row }) => (
        <div className="capitalize whitespace-nowrap">
          {row.getValue('endTime')}
        </div>
      ),
    },

    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const id = row.original._id;
        return (
          <div className="flex items-center gap-4">
            <SlotUpdateModal id={id} />

            <button onClick={() => handleDeleteSlot(id)}>
              <FaRegTrashCan className="text-xl text-red-500" />
            </button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: slots,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
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

  if (isSlotsLoading || isRoomsLoading || isDatesLoading)
    return <LoadingSpinner />;

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4 md:w-3/4 md:flex-row md:py-4">
        <div className="flex-1 w-full">
          <select
            onChange={(e) => setFilterByRoom(e.target.value)}
            className="w-full px-3 py-2 border rounded outline-none "
          >
            <option value="">Filter by room name</option>
            {roomsOptions?.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 w-full">
          <select
            onChange={(e) => setFilterByDate(e.target.value)}
            className="w-full px-3 py-2 border rounded outline-none "
          >
            <option value="">Filter by date</option>
            {dateOptions?.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="py-[21px] w-full flex justify-between"
              >
                Columns <ChevronDownIcon className="w-4 h-4" />
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
export default SlotsManagementTable;
