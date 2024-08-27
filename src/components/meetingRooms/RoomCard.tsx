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
  <div className="p-4 bg-white rounded shadow-lg">
    <img
      src={room.image}
      alt={room.name}
      className="w-full h-40 object-cover rounded"
    />
    <h3 className="text-lg font-semibold mt-2">{room.name}</h3>
    <p className="text-sm text-gray-600">Capacity: {room.capacity}</p>
    <p className="text-sm text-gray-600">
      Price per slot: ${room.pricePerSlot}
    </p>
    <Link
      to={`/rooms/${room.id}`}
      className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
    >
      See Details
    </Link>
  </div>
);

export default RoomCard;
