import { useAppSelector } from '@/redux/hooks';
import ActiveLink from '../ui/ActiveLink';

import { FaHome, FaPlusSquare } from 'react-icons/fa';

const Sidebar = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <nav>
      {/* ADMIN ROUTES */}
      {user?.role === 'admin' && (
        <ul className="flex flex-col gap-4">
          <li className="flex">
            <ActiveLink className="flex items-center gap-2" to="/">
              <FaHome className="text-2xl md:text-base" />
              <span className="hidden md:block">Home</span>
            </ActiveLink>
          </li>
          <li className="flex">
            <ActiveLink
              className="flex items-center gap-2"
              to="/dashboard/admin"
            >
              <FaHome className="text-2xl md:text-base" />
              <span className="hidden md:block">Admin Home</span>
            </ActiveLink>
          </li>
          <li className="flex">
            <ActiveLink
              className="flex items-center gap-2"
              to="/dashboard/create-room"
            >
              <FaPlusSquare className="text-2xl md:text-base" />
              <span className="hidden md:block">Create Room</span>
            </ActiveLink>
          </li>
          <li className="flex">
            <ActiveLink
              className="flex items-center gap-2"
              to="/dashboard/create-slot"
            >
              <FaPlusSquare className="text-2xl md:text-base" />
              <span className="hidden md:block">Create Slot</span>
            </ActiveLink>
          </li>
          <li className="flex">
            <ActiveLink
              className="flex items-center gap-2"
              to="/dashboard/make-admin"
            >
              <FaPlusSquare className="text-2xl md:text-base" />
              <span className="hidden md:block">Make Admin</span>
            </ActiveLink>
          </li>
        </ul>
      )}

      {/* USER ROUTES */}
      {user?.role === 'user' && (
        <ul className="flex flex-col gap-4">
          <li className="flex">
            <ActiveLink className="flex items-center gap-2" to="/">
              <FaHome className="text-2xl md:text-base" />
              <span className="hidden md:block">Home</span>
            </ActiveLink>
          </li>
          <li className="flex">
            <ActiveLink
              className="flex items-center gap-2"
              to="/dashboard/user"
            >
              <FaHome className="text-2xl md:text-base" />
              <span className="hidden md:block">User Home</span>
            </ActiveLink>
          </li>
          <li className="flex">
            <ActiveLink
              className="flex items-center gap-2"
              to="/dashboard/my-bookings"
            >
              <FaPlusSquare className="text-2xl md:text-base" />
              <span className="hidden md:block">My Bookings</span>
            </ActiveLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Sidebar;
