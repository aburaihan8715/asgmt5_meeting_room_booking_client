import MyBookingsTable from '@/components/dashboard/user/MyBookingsTable';
import SectionHeading from '@/components/ui/SectionHeading';

const MyBookings = () => {
  return (
    <section>
      <div>
        <div className="flex justify-center">
          <SectionHeading heading="My Bookings" />
        </div>
        <div>
          <MyBookingsTable />
        </div>
      </div>
    </section>
  );
};

export default MyBookings;
