const featuredRooms = [
  {
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    roomName: 'Conference Room A',
    capacity: 20,
    pricePerSlot: 150,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    roomName: 'Meeting Room B',
    capacity: 15,
    pricePerSlot: 100,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    roomName: 'Workshop Room C',
    capacity: 25,
    pricePerSlot: 200,
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    roomName: 'Seminar Room D',
    capacity: 30,
    pricePerSlot: 250,
  },
];

const FeaturedRooms: React.FC = () => {
  return (
    <section className="px-4 py-10 border-b md:py-20 md:px-10">
      <div className="flex justify-center">
        <SectionHeading heading="Featured Rooms" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredRooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            roomName={room.roomName}
            capacity={room.capacity}
            pricePerSlot={room.pricePerSlot}
          />
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Link to="/meeting-rooms">
          <Button variant={'outline'}>See More...</Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedRooms;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import SectionHeading from '../ui/SectionHeading';

interface RoomCardProps {
  image: string;
  roomName: string;
  capacity: number;
  pricePerSlot: number;
}

const RoomCard = ({
  image,
  roomName,
  capacity,
  pricePerSlot,
}: RoomCardProps) => {
  return (
    <div className="relative overflow-hidden bg-white rounded-lg shadow-md group">
      <img
        src={image}
        alt={roomName}
        className="object-cover w-full h-40"
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
          {roomName}
        </h3>
        <p className="mb-1 text-sm text-gray-600">
          Capacity: {capacity} people
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Price per slot: ${pricePerSlot}
        </p>
      </div>
    </div>
  );
};
