import AppLayout from '@/components/layouts/AppLayout';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import AboutUs from '@/pages/AboutUs';
import ContactUs from '@/pages/ContactUs';
import Dashboard from '@/pages/dashboard/Dashboard';
import MyBooking from '@/pages/dashboard/MyBooking';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import MeetingRooms from '@/pages/MeetingRooms';
import Register from '@/pages/Register';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  // APP LAYOUT ROUTES
  {
    element: <AppLayout />,
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

  // DASHBOARD LAYOUT ROUTES
  {
    element: <DashboardLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'my-booking',
        element: <MyBooking />,
      },
    ],
  },

  // OTHERS ROUTES
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
