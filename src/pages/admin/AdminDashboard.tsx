/*

import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/common/LoadingSpinner';

// Dynamically import components
const BookingManagementTable = lazy(
  () => import('@/components/admin/BookingManagementTable')
);
const RoomManagementTable = lazy(
  () => import('@/components/admin/RoomManagementTable')
);
const SlotsManagementTable = lazy(
  () => import('@/components/admin/SlotsManagementTable')
);
const SectionHeading = lazy(
  () => import('@/components/common/SectionHeading')
);

const AdminDashboard = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <section>
        <div className="flex justify-center">
          <SectionHeading heading="Admin Dashboard" />
        </div>
        <div className="space-y-20">
          <div className="p-1 pb-10 rounded-md shadow-lg md:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between">
              <h3 className="font-medium md:text-xl">Room Management</h3>
              <Link to={`/dashboard/create-room`}>
                <Button className="w-full md:w-auto">Create Room</Button>
              </Link>
            </div>
            <div>
              <RoomManagementTable />
            </div>
          </div>

          <div className="p-1 py-10 space-y-2 rounded-md shadow-lg md:p-5">
            <div className="flex flex-col gap-4 md:justify-between md:flex-row">
              <h3 className="font-medium md:text-xl">Slot Management</h3>
              <Link to={`/dashboard/create-slot`}>
                <Button className="w-full md:w-auto">Create Slot</Button>
              </Link>
            </div>
            <div>
              <SlotsManagementTable />
            </div>
          </div>

          <div className="p-1 py-10 rounded-md shadow-lg md:p-5">
            <div className="flex justify-between">
              <h3 className="font-medium md:text-xl">
                Booking Management
              </h3>
            </div>
            <div>
              <BookingManagementTable />
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default AdminDashboard;
*/

import BookingBarChart from '@/components/admin/BookingBarChart';
import CustomPieChart from '@/components/admin/CustomPieChart';
import InfoCard from '@/components/admin/InfoCard';
import LatestTransactions from '@/components/admin/LatestTransactions';
import LatestUsers from '@/components/admin/LatestUsers';
import UserLineChart from '@/components/admin/UserLineChart';
import DashboardFooter from '@/components/common/DashboardFooter';
import { FaCoins, FaUsers, FaWallet } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';

const AdminDashboard = () => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <InfoCard
          bg="bg-green-100"
          title="Users"
          count={85}
          icon={<FaUsers className="text-3xl text-blue-500" />}
        />
        <InfoCard
          bg="bg-orange-100"
          title="Bookings"
          count={20}
          icon={<FiCalendar className="text-blue-500 text-3xl" />}
        />
        <InfoCard
          bg="bg-yellow-100"
          title="Payments"
          count={20}
          icon={<FaWallet className="text-blue-500 text-3xl" />}
        />
        <InfoCard
          bg="bg-orange-100"
          title="Revenue"
          count={255}
          icon={<FaCoins className="text-blue-500 text-3xl" />}
        />
      </div>

      <div className="flex flex-col gap-10 sm:flex-row">
        <div className="flex-1 p-1 rounded shadow-md md:p-5">
          <BookingBarChart />
        </div>

        <div className="flex-1 p-1 rounded shadow-md md:p-5">
          <CustomPieChart />
        </div>
      </div>

      <div className="p-1 rounded shadow-md md:p-5">
        <UserLineChart />
      </div>

      <div className="flex gap-10">
        <LatestUsers />
        <LatestTransactions />
      </div>

      <DashboardFooter />
    </div>
  );
};

export default AdminDashboard;
