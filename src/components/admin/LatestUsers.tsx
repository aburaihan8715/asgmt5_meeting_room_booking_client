import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router';

const LatestUsers = () => {
  return (
    <div className="rounded-md p-1 shadow-md md:p-5">
      <h2 className="mb-5 text-2xl font-medium text-gray-700">
        Latest users
      </h2>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5]?.map((item: any) => (
          <div key={item} className="flex items-center gap-5">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={40}
              height={40}
              alt="Profile image"
            />

            <div className="flex flex-col">
              <span className="font-medium">User Name</span>
              <span className="text-xs">Joined_20-05-2025</span>
            </div>

            <Link
              to={`/rooms`}
              className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-1"
            >
              <EyeIcon size={16} />
              view
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUsers;
