import AppLayout from '@/components/layouts/AppLayout';
import Home from '@/pages/Home';
import MeetingRooms from '@/pages/MeetingRooms';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/meeting-rooms',
        element: <MeetingRooms />,
      },
    ],
  },
]);
