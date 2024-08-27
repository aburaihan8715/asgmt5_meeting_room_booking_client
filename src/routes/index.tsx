import AppLayout from '@/components/layouts/AppLayout';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import AboutUs from '@/pages/AboutUs';
import ContactUs from '@/pages/ContactUs';
import AdminDashboard from '@/pages/dashboard/admin/AdminDashboard';
import MyBooking from '@/pages/dashboard/user/MyBooking';
import Home from '@/pages/Home';
import Login from '@/pages/auth/Login';
import MeetingRooms from '@/pages/MeetingRooms';
import Register from '@/pages/auth/Register';
import { createBrowserRouter } from 'react-router-dom';
import UserDashboard from '@/pages/dashboard/user/UserDashboard';
import ErrorPage from '@/pages/ErrorPage';

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
        path: 'contact',
        element: <ContactUs />,
      },
      {
        path: 'about',
        element: <AboutUs />,
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
        element: <AdminDashboard />,
      },
      // B2) user
      {
        path: 'user',
        element: <UserDashboard />,
      },
      {
        path: 'my-booking',
        element: <MyBooking />,
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
