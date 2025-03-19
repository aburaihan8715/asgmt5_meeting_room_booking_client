import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const LatestTransactions = () => {
  return (
    <div className="flex-1 rounded-md p-1 shadow-md md:p-5">
      <h2 className="mb-2 text-2xl font-medium text-gray-700">
        Latest subscriptions
      </h2>

      <div className="">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">User</TableHead>
              <TableHead>Transaction id</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5]?.map((item) => (
              <TableRow key={item}>
                <TableCell className="font-medium">
                  test@gmail.com
                </TableCell>
                <TableCell>5dfd5f5df5d5f5d5</TableCell>
                <TableCell>20-03-2025</TableCell>
                <TableCell>23</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LatestTransactions;
