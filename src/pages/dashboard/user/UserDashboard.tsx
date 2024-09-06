import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useAppSelector } from '@/redux/hooks';

const UserDashboard = () => {
  const name = useAppSelector((state) => state?.auth?.user?.name);

  if (!name) {
    return <LoadingSpinner />;
  }
  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <h1 className="text-2xl font-semibold text-center md:text-4xl">
          Welcome {name}
        </h1>

        <div className="flex justify-center mt-4">
          <img
            className="rounded-full w-[100px] h-[100px] md:w-[300px] md:h-[300px] object-cover"
            src="https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_640.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
