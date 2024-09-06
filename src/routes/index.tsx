import AppLayout from '@/components/layouts/AppLayout';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import AboutUs from '@/pages/AboutUs';
import ContactUs from '@/pages/ContactUs';
import AdminDashboard from '@/pages/dashboard/admin/AdminDashboard';
import Home from '@/pages/Home';
import Login from '@/pages/auth/Login';
import MeetingRooms from '@/pages/MeetingRooms';
import Register from '@/pages/auth/Register';
import { createBrowserRouter } from 'react-router-dom';
import UserDashboard from '@/pages/dashboard/user/UserDashboard';
import ErrorPage from '@/pages/ErrorPage';
import RoomDetails from '@/pages/RoomDetails';
import BookingProcess from '@/pages/BookingProcess';
import Checkout from '@/pages/Checkout';
import Payment from '@/pages/Payment';
import ProtectedRoute from '@/components/layouts/ProtectedRoute';
import CreateRoom from '@/pages/dashboard/admin/CreateRoom';
import CreateSlot from '@/pages/dashboard/admin/CreateSlot';
import MakeAdmin from '@/pages/dashboard/admin/MakeAdmin';
import MyBookings from '@/pages/dashboard/user/MyBookings';

export const router = createBrowserRouter([
  // A) APP LAYOUT ROUTES
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'meeting-rooms',
        element: <MeetingRooms />,
      },
      {
        path: 'room-details/:id',
        element: (
          <ProtectedRoute role="user">
            <RoomDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: 'contact',
        element: <ContactUs />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'booking-process/:roomId',
        element: <BookingProcess />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
    ],
  },

  // B) DASHBOARD LAYOUT ROUTES
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      // B1) admin
      {
        path: 'admin',
        element: (
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'create-room',
        element: (
          <ProtectedRoute role="admin">
            <CreateRoom />
          </ProtectedRoute>
        ),
      },
      {
        path: 'create-slot',
        element: (
          <ProtectedRoute role="admin">
            <CreateSlot />
          </ProtectedRoute>
        ),
      },
      {
        path: 'make-admin',
        element: (
          <ProtectedRoute role="admin">
            <MakeAdmin />
          </ProtectedRoute>
        ),
      },

      // B2) user
      {
        path: 'user',
        element: (
          <ProtectedRoute role="user">
            <UserDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'my-bookings',
        element: (
          <ProtectedRoute role="user">
            <MyBookings />
          </ProtectedRoute>
        ),
      },
    ],
  },

  // C) OTHERS ROUTES
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
