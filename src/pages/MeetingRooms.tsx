import { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { useDebouncedCallback } from 'use-debounce';
import { useGetAllRoomsQuery } from '@/redux/features/room/roomApi';
import { TRoom } from '@/types';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorMessage from '@/components/ui/ErrorMessage';

// Dynamically import components
const FilterBar = lazy(
  () => import('@/components/meetingRooms/FilterBar')
);
const RoomCard = lazy(() => import('@/components/meetingRooms/RoomCard'));
const Pagination = lazy(() => import('@/components/ui/Pagination'));
const SectionHeading = lazy(
  () => import('@/components/ui/SectionHeading')
);

const MeetingRoomsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterByMinCapacity, setFilterByMinCapacity] = useState('');
  const [filterByMaxPrice, setFilterByMaxPrice] = useState('');
  const [sortByPrice, setSortByPrice] = useState('');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const searchDebounce = useDebouncedCallback((value) => {
    setSearchQuery(value);
  }, 1000);
  const minCapacityDebounce = useDebouncedCallback((value) => {
    setFilterByMinCapacity(value);
  }, 1000);
  const maxPriceDebounce = useDebouncedCallback((value) => {
    setFilterByMaxPrice(value);
  }, 1000);

  const { data, isLoading, isError } = useGetAllRoomsQuery({
    searchQuery,
    filterByMinCapacity,
    filterByMaxPrice,
    sortByPrice,
    page: currentPage,
    limit: itemsPerPage,
  });
  const rooms: TRoom[] = data?.data || [];
  const meta = data?.meta || {};

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClearFilter = () => {
    setSearchQuery('');
    setFilterByMinCapacity('');
    setFilterByMaxPrice('');
    setSortByPrice('');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError || !rooms) {
    return <ErrorMessage>Error loading rooms.</ErrorMessage>;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <section className="px-1 py-10 md:px-10 md:py-20">
        <div className="flex justify-center">
          <SectionHeading heading="Meeting Rooms" />
        </div>
        <div className="min-h-screen">
          <FilterBar
            searchDebounce={searchDebounce}
            minCapacityDebounce={minCapacityDebounce}
            maxPriceDebounce={maxPriceDebounce}
            setSortByPrice={setSortByPrice}
            handleClearFilter={handleClearFilter}
            sortByPrice={sortByPrice}
          />
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {rooms?.map((room) => (
              <motion.div
                key={room._id}
                className="overflow-hidden bg-white rounded shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <RoomCard room={room} />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-start">
            <Pagination
              currentPage={currentPage}
              totalPages={meta?.totalPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default MeetingRoomsPage;
