import InfoCard from '@/components/admin/InfoCard';
import DashboardFooter from '@/components/common/DashboardFooter';
import UserProfileCard from '@/components/user/UserProfileCard';
import { FiCalendar, FiDollarSign } from 'react-icons/fi';

const UserDashboard = () => {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <InfoCard
          bg="bg-orange-100"
          title="Bookings"
          count={3}
          icon={<FiCalendar className="text-blue-500 text-3xl" />}
        />
        <InfoCard
          bg="bg-yellow-100"
          title="Costs"
          count={120}
          icon={<FiDollarSign className="text-green-500 text-3xl" />}
        />
      </div>

      <div>
        <UserProfileCard
          name="John Doe"
          email="johndoe@example.com"
          phone="+1 (555) 123-4567"
          address="123 Main Street, New York, NY"
          role="User"
          bio="Passionate about web development and user experience. Loves working with MERN stack."
          imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        />
      </div>

      <div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default UserDashboard;
