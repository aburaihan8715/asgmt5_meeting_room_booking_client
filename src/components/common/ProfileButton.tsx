import { Link } from 'react-router';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useDispatch } from 'react-redux';
import defaultUser from '@/assets/images/defaultUser.png';
import { logout } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';

const ProfileButton = () => {
  const { user } = useAppSelector((state) => state.auth);
  const role = user?.role;
  const dispatch = useDispatch();
  return (
    <Popover>
      <PopoverTrigger>
        <img
          className="object-cover w-10 h-10 rounded-full"
          src={defaultUser}
          alt=""
        />
      </PopoverTrigger>
      <PopoverContent className="mt-5">
        <h4 className="text-lg font-semibold">My account</h4>
        <hr className="my-2 border-gray-300" />
        {role === 'admin' ? (
          <>
            <div className="flex flex-col gap-2">
              <Link
                to="/admin/dashboard"
                className="border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary"
              >
                Dashboard
              </Link>
              <button
                onClick={() => dispatch(logout())}
                className="text-left border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <Link
                to="/user/dashboard"
                className="border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary"
              >
                Dashboard
              </Link>
              <Link
                to="/user/my-bookings"
                className="border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary"
              >
                My booking
              </Link>
              <button
                onClick={() => dispatch(logout())}
                className="text-left border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default ProfileButton;
