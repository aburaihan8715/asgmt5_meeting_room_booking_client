import ErrorMessage from '@/components/ui/ErrorMessage';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import SectionHeading from '@/components/ui/SectionHeading';
import { useGetRoomQuery } from '@/redux/features/room/roomApi';
import { TRoom } from '@/types';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const RoomDetailsPage: React.FC = () => {
  const { id } = useParams();

  const { data: room, isLoading, isError } = useGetRoomQuery(id);
  const roomData: TRoom = room?.data || {};

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage>Error loading rooms.</ErrorMessage>;
  }

  return (
    <section className="px-10 py-10 md:py-20">
      <div className="flex justify-center">
        <SectionHeading heading="Room Details" />
      </div>
      <div className="min-h-screen">
        <div className="p-10 overflow-hidden border rounded-lg shadow-lg">
          {/* IMAGE */}
          <div className="flex gap-4">
            {roomData?.images.slice(0, 2).map((image, index) => (
              <motion.div
                key={index}
                className="h-64 flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={image}
                  alt={`room image`}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </motion.div>
            ))}
          </div>

          {/* ROOM DETAILS */}
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-gray-800">
              {roomData.roomName}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Room No: {roomData.roomNo} | Floor: {roomData.floorNo}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Capacity: {roomData.capacity} people
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Price per Slot: ${roomData.pricePerSlot}
            </p>

            {/* AMENITIES */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Amenities:
              </h2>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                {roomData.amenities?.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>

            {/* BOOK NOW BUTTON */}
            <div className="mt-8">
              <Link
                to={`/booking-process/${roomData._id}`}
                className="block w-full px-6 py-3 text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailsPage;
