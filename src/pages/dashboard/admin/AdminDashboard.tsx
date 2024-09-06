import BookingManagementTable from '@/components/dashboard/admin/BookingManagementTable';
import RoomManagementTable from '@/components/dashboard/admin/RoomManagementTable';
import SlotsManagementTable from '@/components/dashboard/admin/SlotsManagementTable';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <section>
      <div className="flex justify-center">
        <SectionHeading heading="Admin Dashboard" />
      </div>
      <div className="space-y-20">
        <div className="pb-10 shadow-lg p-5 rounded-md">
          <div className="flex justify-between">
            <h3 className="font-medium text-xl">Room Management</h3>
            <Link to={`/dashboard/create-room`}>
              <Button>Create Room</Button>
            </Link>
          </div>
          <div>
            <RoomManagementTable />
          </div>
        </div>

        <div className="py-10 shadow-lg p-5 rounded-md">
          <div className="flex justify-between">
            <h3 className="font-medium text-xl">Slot Management</h3>
            <Link to={`/dashboard/create-slot`}>
              <Button>Create Slot</Button>
            </Link>
          </div>
          <div>
            <SlotsManagementTable />
          </div>
        </div>

        <div className="py-10 shadow-lg p-5 rounded-md">
          <div className="flex justify-between">
            <h3 className="font-medium text-xl">Booking Management</h3>
          </div>
          <div>
            <BookingManagementTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;

// import React, { useState } from 'react';
// import Swal from 'sweetalert2';

// interface Room {
//   id: number;
//   name: string;
//   roomNumber: string;
//   floorNumber: string;
//   capacity: number;
//   pricePerSlot: number;
// }

// interface Slot {
//   id: number;
//   roomName: string;
//   roomNumber: string;
//   date: string;
//   startTime: string;
//   endTime: string;
// }

// interface Booking {
//   id: number;
//   roomName: string;
//   userName: string;
//   dateTime: string;
//   status: 'Confirmed' | 'Unconfirmed';
// }

// const AdminDashboard: React.FC = () => {
//   // Dummy data for demonstration
//   const [rooms] = useState<Room[]>([
//     {
//       id: 1,
//       name: 'Conference Room A',
//       roomNumber: '101',
//       floorNumber: '1st Floor',
//       capacity: 20,
//       pricePerSlot: 100,
//     },
//     {
//       id: 2,
//       name: 'Meeting Room B',
//       roomNumber: '102',
//       floorNumber: '2nd Floor',
//       capacity: 15,
//       pricePerSlot: 80,
//     },
//   ]);

//   const [slots] = useState<Slot[]>([
//     {
//       id: 1,
//       roomName: 'Conference Room A',
//       roomNumber: '101',
//       date: '2024-09-01',
//       startTime: '09:00 AM',
//       endTime: '10:00 AM',
//     },
//     {
//       id: 2,
//       roomName: 'Meeting Room B',
//       roomNumber: '102',
//       date: '2024-09-02',
//       startTime: '10:00 AM',
//       endTime: '11:00 AM',
//     },
//   ]);

//   const [bookings, setBookings] = useState<Booking[]>([
//     {
//       id: 1,
//       roomName: 'Conference Room A',
//       userName: 'John Doe',
//       dateTime: '2024-09-01 09:00 AM',
//       status: 'Unconfirmed',
//     },
//     {
//       id: 2,
//       roomName: 'Meeting Room B',
//       userName: 'Jane Smith',
//       dateTime: '2024-09-02 10:00 AM',
//       status: 'Confirmed',
//     },
//   ]);

//   const handleCreateRoom = () => {
//     // Logic to create a new room
//   };

//   const handleCreateSlot = () => {
//     // Logic to create a new slot
//   };

//   const handleUpdateRoom = (room: Room) => {
//     console.log(room);
//     // Logic to update room details
//   };

//   const handleDeleteRoom = (roomId: number) => {
//     console.log(roomId);
//     // Logic to delete a room
//   };

//   const handleUpdateSlot = (slot: Slot) => {
//     console.log(slot);
//     // Logic to update slot details
//   };

//   const handleDeleteSlot = (slotId: number) => {
//     console.log(slotId);
//     // Logic to delete a slot
//   };

//   const handleApproveBooking = (bookingId: number) => {
//     console.log(bookingId);
//     // Logic to approve a booking
//   };

//   const handleRejectBooking = (bookingId: number) => {
//     console.log(bookingId);
//     // Logic to reject a booking
//   };

//   const handleDeleteBooking = (bookingId: number) => {
//     // Logic to delete a booking
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this booking!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setBookings(
//           bookings.filter((booking) => booking.id !== bookingId)
//         );
//         Swal.fire('Deleted!', 'The booking has been deleted.', 'success');
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen p-8 bg-gray-100">
//       <h1 className="mb-8 text-3xl font-bold">Admin Dashboard</h1>

//       {/* Room Management */}
//       <div className="mb-12">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-2xl font-semibold">Room Management</h2>
//           <button
//             onClick={handleCreateRoom}
//             className="px-4 py-2 text-white bg-blue-600 rounded-md"
//           >
//             Create Room
//           </button>
//         </div>
//         <table className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-3 text-left">Room Name</th>
//               <th className="px-4 py-3 text-left">Room No.</th>
//               <th className="px-4 py-3 text-left">Floor No.</th>
//               <th className="px-4 py-3 text-left">Capacity</th>
//               <th className="px-4 py-3 text-left">Price Per Slot</th>
//               <th className="px-4 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rooms.map((room) => (
//               <tr key={room.id} className="border-b">
//                 <td className="px-4 py-3">{room.name}</td>
//                 <td className="px-4 py-3">{room.roomNumber}</td>
//                 <td className="px-4 py-3">{room.floorNumber}</td>
//                 <td className="px-4 py-3">{room.capacity}</td>
//                 <td className="px-4 py-3">${room.pricePerSlot}</td>
//                 <td className="px-4 py-3">
//                   <button
//                     onClick={() => handleUpdateRoom(room)}
//                     className="mr-2 text-blue-600"
//                   >
//                     Update
//                   </button>
//                   <button
//                     onClick={() => handleDeleteRoom(room.id)}
//                     className="text-red-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Slots Management */}
//       <div className="mb-12">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-2xl font-semibold">Slots Management</h2>
//           <button
//             onClick={handleCreateSlot}
//             className="px-4 py-2 text-white bg-blue-600 rounded-md"
//           >
//             Create Slot
//           </button>
//         </div>
//         <table className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-3 text-left">Room Name</th>
//               <th className="px-4 py-3 text-left">Room No.</th>
//               <th className="px-4 py-3 text-left">Date</th>
//               <th className="px-4 py-3 text-left">Start Time</th>
//               <th className="px-4 py-3 text-left">End Time</th>
//               <th className="px-4 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {slots.map((slot) => (
//               <tr key={slot.id} className="border-b">
//                 <td className="px-4 py-3">{slot.roomName}</td>
//                 <td className="px-4 py-3">{slot.roomNumber}</td>
//                 <td className="px-4 py-3">{slot.date}</td>
//                 <td className="px-4 py-3">{slot.startTime}</td>
//                 <td className="px-4 py-3">{slot.endTime}</td>
//                 <td className="px-4 py-3">
//                   <button
//                     onClick={() => handleUpdateSlot(slot)}
//                     className="mr-2 text-blue-600"
//                   >
//                     Update
//                   </button>
//                   <button
//                     onClick={() => handleDeleteSlot(slot.id)}
//                     className="text-red-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Booking Management */}
//       <div>
//         <h2 className="mb-4 text-2xl font-semibold">Booking Management</h2>
//         <table className="w-full overflow-hidden bg-white rounded-lg shadow-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-3 text-left">Room Name</th>
//               <th className="px-4 py-3 text-left">User Name</th>
//               <th className="px-4 py-3 text-left">Date & Time</th>
//               <th className="px-4 py-3 text-left">Status</th>
//               <th className="px-4 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking) => (
//               <tr key={booking.id} className="border-b">
//                 <td className="px-4 py-3">{booking.roomName}</td>
//                 <td className="px-4 py-3">{booking.userName}</td>
//                 <td className="px-4 py-3">{booking.dateTime}</td>
//                 <td className="px-4 py-3">{booking.status}</td>
//                 <td className="px-4 py-3">
//                   <button
//                     onClick={() => handleApproveBooking(booking.id)}
//                     className="mr-2 text-green-600"
//                   >
//                     Approve
//                   </button>
//                   <button
//                     onClick={() => handleRejectBooking(booking.id)}
//                     className="mr-2 text-yellow-600"
//                   >
//                     Reject
//                   </button>
//                   <button
//                     onClick={() => handleDeleteBooking(booking.id)}
//                     className="text-red-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
