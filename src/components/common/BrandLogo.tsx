import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-primary">
        <HiOutlineOfficeBuilding className="text-2xl text-blue-500" />
      </p>
      <p className="text-2xl font-semibold text-transparent text-gray-700 bg-gradient-to-r from-blue-700 via-orange-600 to-blue-500 bg-clip-text">
        Meet<span className="text-primary">T</span>Me
      </p>
    </div>
  );
};

export default BrandLogo;
