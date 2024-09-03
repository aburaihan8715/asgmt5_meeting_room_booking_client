import { Link } from 'react-router-dom';

import { useGetAllRoomsQuery } from '@/redux/features/room/roomApi';
import { TRoom } from '@/types';
import LoadingSpinner from '../ui/LoadingSpinner';
import ErrorMessage from '../ui/ErrorMessage';
import SectionHeading from '../ui/SectionHeading';
import { Button } from '../ui/button';
import RoomCard from '../meetingRooms/RoomCard';

const FeaturedRooms: React.FC = () => {
  const { data, isLoading, isError } = useGetAllRoomsQuery({ limit: 4 });
  const rooms: TRoom[] = data?.data || [];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage>Error while loading rooms.</ErrorMessage>;
  }
  return (
    <section className="px-4 py-10 border-b md:py-20 md:px-10">
      <div className="flex justify-center">
        <SectionHeading heading="Featured Rooms" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {rooms?.map((room) => (
          <RoomCard key={room._id} room={room} />
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
