/*

import { useState } from 'react';

interface FilterBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: {
    capacity: number;
    price: number | null;
  }) => void;
  onSortChange: (order: 'asc' | 'desc') => void;
}

const FilterBar = ({
  onSearch,
  onFilterChange,
  onSortChange,
}: FilterBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [capacity, setCapacity] = useState<number>(0);
  const [price, setPrice] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleCapacityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCapacity(Number(e.target.value));
    onFilterChange({ capacity: Number(e.target.value), price });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
    onFilterChange({ capacity, price: Number(e.target.value) });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value as 'asc' | 'desc';
    setSortOrder(order);
    onSortChange(order);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-4 mb-6 md:flex-row">
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by room name"
          className="flex-1 block px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <input
          type="number"
          value={capacity || ''}
          onChange={handleCapacityChange}
          placeholder="Min Capacity"
          className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <input
          type="number"
          value={price || ''}
          onChange={handlePriceChange}
          placeholder="Max Price"
          className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="flex gap-4 mt-4 md:mt-0">
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
        <button
          onClick={() => {
            setSearchQuery('');
            setCapacity(0);
            setPrice(null);
            setSortOrder('asc');
            onFilterChange({ capacity: 0, price: null });
            onSearch('');
            onSortChange('asc');
          }}
          className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
*/

import { Button } from '../ui/button';
import { Input } from '../ui/input';

type TFilterBarProps = {
  searchDebounce: (query: string) => void;
  minCapacityDebounce: (query: number) => void;
  maxPriceDebounce: (query: number) => void;
  setSortByPrice: (query: string) => void;
  handleClearFilter: () => void;
  sortByPrice: string;
};

const FilterBar = ({
  searchDebounce,
  minCapacityDebounce,
  maxPriceDebounce,
  setSortByPrice,
  sortByPrice,
  handleClearFilter,
}: TFilterBarProps) => {
  return (
    <div className="flex flex-col gap-4 mb-6 md:flex-row">
      <div className="flex-1">
        <Input
          type="search"
          name="search"
          id="search"
          onChange={(e) => searchDebounce(e.target.value)}
          placeholder="Search by room name..."
        />
      </div>

      <div className="flex-[2] flex gap-4">
        <Input
          onChange={(e) => minCapacityDebounce(Number(e.target.value))}
          type="number"
          name="capacity"
          id="capacity"
          placeholder="Min Capacity"
        />
        <Input
          onChange={(e) => maxPriceDebounce(Number(e.target.value))}
          type="number"
          name="price"
          id="price"
          placeholder="Max Price"
        />
      </div>

      <div className="flex flex-1 gap-4">
        <select
          onChange={(e) => setSortByPrice(e.target.value)}
          defaultValue={sortByPrice}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary focus:ring-offset-2 focus:ring-2"
        >
          <option value="pricePerSlot">Price: Low to High</option>
          <option value="-pricePerSlot">Price: High to Low</option>
        </select>
      </div>

      <div>
        <Button onClick={handleClearFilter} className="w-full md:w-auto">
          Clear filter
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
