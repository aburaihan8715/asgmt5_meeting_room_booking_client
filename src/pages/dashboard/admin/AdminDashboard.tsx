import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Dynamically import components
const BookingManagementTable = lazy(
  () => import('@/components/dashboard/admin/BookingManagementTable')
);
const RoomManagementTable = lazy(
  () => import('@/components/dashboard/admin/RoomManagementTable')
);
const SlotsManagementTable = lazy(
  () => import('@/components/dashboard/admin/SlotsManagementTable')
);
const SectionHeading = lazy(
  () => import('@/components/ui/SectionHeading')
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
