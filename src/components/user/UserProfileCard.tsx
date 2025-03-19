import React from 'react';

type UserProfileProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  bio?: string;
  imageUrl: string;
};

const UserProfileCard: React.FC<UserProfileProps> = ({
  name,
  email,
  phone,
  address,
  role,
  bio,
  imageUrl,
}) => {
  return (
    <div className="w-full bg-white shadow-md rounded-md p-6 flex flex-col md:flex-row items-center md:items-start mx-auto">
      {/* Left - User Image */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-300 flex-shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right - User Info */}
      <div className="flex-1 mt-6 md:mt-0 md:ml-8">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">{email}</p>
        <p className="text-gray-500">{phone}</p>
        <p className="text-gray-500">{address}</p>

        {/* Role Badge */}
        <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full mt-2 inline-block">
          {role}
        </span>

        {/* Bio Section */}
        {bio && (
          <p className="mt-4 text-gray-600 text-sm border-l-4 border-blue-500 pl-3 italic">
            {bio}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;
