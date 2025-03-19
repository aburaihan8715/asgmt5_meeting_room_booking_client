import { Link } from 'react-router-dom';
import { useState } from 'react';

import BrandLogo from '../common/BrandLogo';
import { Button } from '../ui/button';
import ActiveLink from '../common/ActiveLink';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout } from '@/redux/features/auth/authSlice';
import Drawer from '../common/Drawer';
import { MdMenu } from 'react-icons/md';
import ProfileButton from '../common/ProfileButton';

// HEADER COMPONENT
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const role = user?.role;
  const name = user?.name;
  const dispatch = useAppDispatch();

  const menuItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/rooms">Rooms</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/about">About Us</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact">Contact Us</ActiveLink>
      </li>
      {/* {user && (
        <li>
          <ActiveLink to={`/dashboard/${role}`}>Dashboard</ActiveLink>
        </li>
      )} */}
    </>
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <header>
        {/* DESKTOP NAV */}
        <div className="lg:flex hidden bg-orange-50 justify-between h-[80px] items-center px-10 fixed top-0 w-full z-20">
          {/* LOGO */}
          <Link to="/">
            <BrandLogo />
          </Link>
          <nav>
            <ul className="flex gap-4 font-semibold text-gray-700">
              {menuItems}
            </ul>
          </nav>

          {/* LOGIN,PROFILE GROUP */}
          <div className="flex items-center gap-4">
            {role && (
              <div title={name} className="flex items-center">
                <ProfileButton />
              </div>
            )}

            {!user && (
              <div>
                <Link to={`/login`}>
                  <Button>Login</Button>
                </Link>
              </div>
            )}

            {user && (
              <div>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE NAV */}
        <div className="lg:hidden">
          <div className="flex px-2 bg-[#e9effd] h-[80px] items-center justify-between fixed top-0 w-full z-20">
            {/* menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 text-3xl border rounded border-gray-700/50 md:hidden"
            >
              <MdMenu />
            </button>

            <div className="flex items-center gap-4">
              {role && (
                <div title={name} className="flex items-center">
                  <ProfileButton />
                </div>
              )}

              {!user && (
                <div>
                  <Link to={`/login`}>
                    <Button>Login</Button>
                  </Link>
                </div>
              )}

              {user && (
                <div>
                  <Button onClick={handleLogout}>Logout</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* sidebar */}
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Menu"
      >
        <ul className="flex flex-col gap-2">{menuItems}</ul>
      </Drawer>
    </>
  );
};

export default Header;

// PROFILE POPOVER COMPONENT
// const ProfilePopover = ({ role }: { role: string }) => {
//   const dispatch = useDispatch();
//   return (
//     <Popover>
//       <PopoverTrigger>
//         <img
//           className="object-cover w-10 h-10 rounded-full"
//           src={defaultUser}
//           alt=""
//         />
//       </PopoverTrigger>
//       <PopoverContent className="mt-5">
//         <h4 className="text-lg font-semibold">My account</h4>
//         <hr className="my-2 border-gray-300" />
//         {role === 'admin' ? (
//           <>
//             <div className="flex flex-col gap-2">
//               <Link
//                 to="/dashboard/admin"
//                 className="border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary"
//               >
//                 Dashboard
//               </Link>
//               <button
//                 onClick={() => dispatch(logout())}
//                 className="text-left border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary"
//               >
//                 Logout
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="flex flex-col gap-2">
//               <Link
//                 to="/dashboard/my-bookings"
//                 className="border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary"
//               >
//                 My booking
//               </Link>
//               <button
//                 onClick={() => dispatch(logout())}
//                 className="text-left border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary"
//               >
//                 Logout
//               </button>
//             </div>
//           </>
//         )}
//       </PopoverContent>
//     </Popover>
//   );
// };
