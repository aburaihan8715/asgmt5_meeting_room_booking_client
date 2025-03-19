import { useAppDispatch } from '@/redux/hooks';
import { Button } from '../ui/button';
import { logout } from '@/redux/features/auth/authSlice';

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
