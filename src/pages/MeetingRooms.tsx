import FilterBar from '@/components/meetingRooms/FilterBar1';
import Pagination from '@/components/meetingRooms/Pagination';
import RoomCard from '@/components/meetingRooms/RoomCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Room {
  id: number;
  image: string;
  name: string;
  capacity: number;
  pricePerSlot: number;
}

const initialRooms: Room[] = [
  {
    id: 1,
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    name: 'Conference Room A',
    capacity: 20,
    pricePerSlot: 100,
  },
  {
    id: 2,
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    name: 'Meeting Room B',
    capacity: 15,
    pricePerSlot: 80,
  },
  {
    id: 3,
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    name: 'Training Room C',
    capacity: 25,
    pricePerSlot: 120,
  },
  {
    id: 4,
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    name: 'Board Room D',
    capacity: 12,
    pricePerSlot: 150,
  },
  {
    id: 5,
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    name: 'Event Hall E',
    capacity: 100,
    pricePerSlot: 500,
  },
  {
    id: 6,
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    name: 'Workshop Room F',
    capacity: 30,
    pricePerSlot: 90,
  },
  {
    id: 7,
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    name: 'Seminar Room G',
    capacity: 40,
    pricePerSlot: 110,
  },
  {
    id: 8,
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    name: 'Interview Room H',
    capacity: 8,
    pricePerSlot: 60,
  },
  {
    id: 9,
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    name: 'Strategy Room I',
    capacity: 18,
    pricePerSlot: 140,
  },
  {
    id: 10,
    image:
      'https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg',
    name: 'Breakout Room J',
    capacity: 10,
    pricePerSlot: 70,
  },
];

const MeetingRoomsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<{
    capacity: number | null;
    price: number | null;
  }>({ capacity: null, price: null });
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const filteredAndSortedRooms = initialRooms
    .filter(
      (room) =>
        room.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filters.capacity ? room.capacity >= filters.capacity : true) &&
        (filters.price ? room.pricePerSlot <= filters.price : true)
    )
    .sort((a, b) =>
      sortOrder === 'asc'
        ? a.pricePerSlot - b.pricePerSlot
        : b.pricePerSlot - a.pricePerSlot
    );

  const paginatedRooms = filteredAndSortedRooms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (query: string) => setSearchQuery(query);

  const handleFilterChange = (newFilters: {
    capacity: number | null;
    price: number | null;
  }) => setFilters(newFilters);

  const handleSortChange = (order: 'asc' | 'desc') => setSortOrder(order);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <section className="md:py-20 py-10 px-10">
      <div className="flex justify-center">
        <SectionHeading heading="Meeting Rooms" />
      </div>
      <div className="min-h-screen">
        <FilterBar
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {paginatedRooms.map((room) => (
            <motion.div
              key={room.id}
              className="bg-white rounded shadow-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <RoomCard room={room} />
            </motion.div>
          ))}
        </div>

        {paginatedRooms.length > 0 && (
          <div className="flex justify-start">
            <Pagination
              currentPage={currentPage}
              totalItems={filteredAndSortedRooms.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MeetingRoomsPage;
