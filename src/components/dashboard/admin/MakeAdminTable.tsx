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

import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useDebouncedCallback } from 'use-debounce';
import Pagination from '@/components/ui/Pagination';
import {
  useGetAllUsersQuery,
  useMakeAdminIntoDBMutation,
} from '@/redux/features/user/userApi';
import { TUser } from '@/types/userData.type';
import { toast } from 'sonner';

const MakeAdminTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const searchDebounce = useDebouncedCallback((value) => {
    setSearchQuery(value);
  }, 1000);

  const [makeAdminIntoDB] = useMakeAdminIntoDBMutation();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const { data: usersData, isLoading: isUsersLoading } =
    useGetAllUsersQuery({
      searchQuery,
      page: currentPage,
      limit: itemsPerPage,
    });
  const users: TUser[] = usersData?.data || [];
  const meta = usersData?.meta || {};

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleMakeAdmin = async (user: TUser) => {
    const toastId = toast.loading('loading...');
    try {
      await makeAdminIntoDB({ _id: user._id });
      toast.success('Making admin success!', {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  const columns: ColumnDef<TUser>[] = [
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
      accessorKey: 'name',
      header: 'User Name',
      cell: ({ row }) => (
        <div className="capitalize whitespace-nowrap">
          {row.getValue('name')}
        </div>
      ),
    },

    {
      accessorKey: 'email',
      header: 'Email',
      cell: ({ row }) => (
        <div className="capitalize whitespace-nowrap">
          {row.getValue('email')}
        </div>
      ),
    },

    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ row }) => <div className="">{row.getValue('role')}</div>,
    },

    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const user = row.original;

        return (
          <div className="flex items-center gap-4">
            <button
              disabled={user?.role === 'admin'}
              onClick={() => handleMakeAdmin(user)}
              className={`${
                user?.role === 'admin'
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-700'
              } px-4 py-2 rounded transition-colors whitespace-nowrap`}
            >
              Make Admin
            </button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: users,
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

  if (isUsersLoading) return <LoadingSpinner />;

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          type="search"
          name="search"
          id="search"
          onChange={(e) => searchDebounce(e.target.value)}
          placeholder="Search by name..."
          className="max-w-sm"
        />

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
export default MakeAdminTable;
