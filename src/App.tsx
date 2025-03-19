import { BrowserRouter, Routes, Route } from 'react-router';
import AppLayout from './components/layouts/AppLayout';
import Home from './pages/common/Home';
import NotFound from './pages/not-found';
import AdminLayout from './components/layouts/AdminLayout';
import UserLayout from './components/layouts/UserLayout';
import UserDashboard from './pages/user/UserDashboard';
import CreateRoom from './pages/admin/CreateRoom';
import CreateSlot from './pages/admin/CreateSlot';
import MyBookings from './pages/user/MyBookings';
import AuthLayout from './components/layouts/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AboutUs from './pages/common/AboutUs';
import ContactUs from './pages/common/ContactUs';
import Payment from './pages/common/Payment';
import BookingProcess from './pages/common/BookingProcess';
import Checkout from './pages/common/Checkout';
import RoomsPage from './pages/common/Rooms';
import RoomDetailsPage from './pages/common/RoomDetails';
import AdminDashboard from './pages/admin/AdminDashboard';
import AllRooms from './pages/admin/AllRooms';
import AllSlots from './pages/admin/AllSlots';
import AllUsers from './pages/admin/AllUsers';
import UnauthPage from './pages/unauth';
import ProtectedRoute from './components/layouts/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="payment" element={<Payment />} />
          <Route path="booking-process/:id" element={<BookingProcess />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="room-details/:id" element={<RoomDetailsPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="create-room" element={<CreateRoom />} />
          <Route path="all-rooms" element={<AllRooms />} />
          <Route path="create-slot" element={<CreateSlot />} />
          <Route path="all-slots" element={<AllSlots />} />
          <Route path="all-users" element={<AllUsers />} />
        </Route>

        <Route
          path="user"
          element={
            <ProtectedRoute role="user">
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<UserDashboard />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="my-bookings" element={<MyBookings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="unauth" element={<UnauthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
