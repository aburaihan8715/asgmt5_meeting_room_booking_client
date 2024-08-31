import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
import { Navigate } from 'react-router-dom';

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const user = useAppSelector((state) => state.auth.user);

  // const token = useAppSelector(getCurrentToken);
  // let user;
  // if (token) {
  //   user = verifyToken(token);
  // }

  const dispatch = useAppDispatch();

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
