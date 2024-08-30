// RoomCard.tsx

import { Link } from 'react-router-dom';

interface RoomCardProps {
  room: {
    id: number;
    image: string;
    name: string;
    capacity: number;
    pricePerSlot: number;
  };
}

const RoomCard = ({ room }: RoomCardProps) => (
  <div className="relative overflow-hidden bg-white rounded-lg shadow-md group">
    <img
      src={room.image}
      alt={room.name}
      className="w-full h-40 object-cover rounded"
    />

    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
      <Link
        to={`/room-details/123`}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        See Details
      </Link>
    </div>

    <div className="p-4">
      <h3 className="mb-2 text-xl font-semibold text-gray-800">
        {room.name}
      </h3>
      <p className="mb-1 text-sm text-gray-600">
        Capacity: {room.capacity} people
      </p>
      <p className="mb-4 text-sm text-gray-600">
        Price per slot: ${room.pricePerSlot}
      </p>
    </div>
  </div>
);

export default RoomCard;
