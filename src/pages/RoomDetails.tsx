import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface RoomDetailsProps {
  id: number;
  image: string;
  name: string;
  roomNumber: string;
  floorNumber: string;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
}

const roomDetails: RoomDetailsProps = {
  id: 1,
  image:
    'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_1280.jpg',
  name: 'Conference Room A',
  roomNumber: '101',
  floorNumber: '1st Floor',
  capacity: 20,
  pricePerSlot: 100,
  amenities: ['Projector', 'Whiteboard', 'Wi-Fi', 'Air Conditioning'],
};

const RoomDetailsPage: React.FC = () => {
  return (
    <section className="md:py-20 py-10 px-10">
      <div className="flex justify-center">
        <SectionHeading heading="Room Details" />
      </div>
      <div className="min-h-screen">
        <div className="shadow-lg rounded-lg overflow-hidden border p-10">
          {/* IMAGE */}
          <motion.div
            className="h-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={roomDetails.image}
              alt={roomDetails.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </motion.div>

          {/* ROOM DETAILS */}
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-gray-800">
              {roomDetails.name}
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Room No: {roomDetails.roomNumber} | Floor:{' '}
              {roomDetails.floorNumber}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Capacity: {roomDetails.capacity} people
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Price per Slot: ${roomDetails.pricePerSlot}
            </p>

            {/* AMENITIES */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Amenities:
              </h2>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {roomDetails.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>

            {/* BOOK NOW BUTTON */}
            <div className="mt-8">
              <Link
                to={`/booking/${roomDetails.id}`}
                className="block w-full px-6 py-3 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
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
