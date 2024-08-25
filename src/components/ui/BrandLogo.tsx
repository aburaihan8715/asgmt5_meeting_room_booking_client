import BookIcon from '@/assets/icons/BookIcon';

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-primary">
        <BookIcon />
      </p>
      <p className="font-semibold text-gray-700 text-2xl">
        Meet<span className="text-primary">T</span>Me
      </p>
    </div>
  );
};

export default BrandLogo;
