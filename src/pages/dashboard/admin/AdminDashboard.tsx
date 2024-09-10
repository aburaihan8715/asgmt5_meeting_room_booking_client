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
          <div className="p-5 pb-10 rounded-md shadow-lg">
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Room Management</h3>
              <Link to={`/dashboard/create-room`}>
                <Button>Create Room</Button>
              </Link>
            </div>
            <div>
              <RoomManagementTable />
            </div>
          </div>

          <div className="p-5 py-10 rounded-md shadow-lg">
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Slot Management</h3>
              <Link to={`/dashboard/create-slot`}>
                <Button>Create Slot</Button>
              </Link>
            </div>
            <div>
              <SlotsManagementTable />
            </div>
          </div>

          <div className="p-5 py-10 rounded-md shadow-lg">
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Booking Management</h3>
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
