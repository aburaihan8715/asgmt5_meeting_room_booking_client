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
          <option value="">Sort By Price</option>
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
