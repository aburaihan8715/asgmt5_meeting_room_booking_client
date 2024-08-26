import BookIcon from '@/assets/icons/BookIcon';

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-primary">
        <BookIcon />
      </p>
      <p className="font-semibold text-gray-700 text-2xl bg-gradient-to-r from-blue-700 via-orange-600 to-blue-500 bg-clip-text text-transparent">
        Meet<span className="text-primary">T</span>Me
      </p>
    </div>
  );
};

export default BrandLogo;
