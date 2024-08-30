import { Link } from 'react-router-dom';
import { useState } from 'react';

import BrandLogo from '../ui/BrandLogo';
import { Button } from '../ui/button';
import ActiveLink from '../ui/ActiveLink';
import defaultUser from '@/assets/images/defaultUser.png';
import MenuIcon from '@/assets/icons/MenuIcon';
import CloseIcon from '@/assets/icons/CloseIcon';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout } from '@/redux/features/auth/authSlice';

// PROFILE POPOVER COMPONENT
const ProfilePopover = ({ role }: { role: string }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <img
          className="object-cover w-10 h-10 rounded-full"
          src={defaultUser}
          alt=""
        />
      </PopoverTrigger>
      <PopoverContent className="mt-5">
        <h4 className="text-lg font-semibold">My account</h4>
        <hr className="my-2 border-gray-300" />
        {role === 'admin' ? (
          <>
            <div className="flex flex-col gap-2">
              <Link
                to="/dashboard"
                className="border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary"
              >
                Dashboard
              </Link>
              <button className="text-left border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary">
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <Link
                to="/my-booking"
                className="border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary"
              >
                My booking
              </Link>
              <button className="text-left border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary">
                Logout
              </button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

// HEADER COMPONENT
const Header = () => {
  const [open, setOpen] = useState(true);
  const user = useAppSelector((state) => state.auth.user);
  const role = user?.role;
  const dispatch = useAppDispatch();

  const menuItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/meeting-rooms">Meeting rooms</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/about">About Us</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact">Contact Us</ActiveLink>
      </li>
      {user && (
        <li>
          <ActiveLink to={`/dashboard/${role}`}>Dashboard</ActiveLink>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      {/* DESKTOP NAV */}
      <div className="md:flex hidden bg-orange-50 justify-between h-[80px] items-center px-10 fixed top-0 w-full z-20">
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
            <div className="flex items-center">
              <ProfilePopover role={role} />
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
      <div className="md:hidden">
        <div className="flex px-2 bg-[#e9effd] h-[80px] items-center justify-between fixed top-0 w-full z-20">
          <div onClick={() => setOpen(!open)} className="">
            {open && (
              <button className="flex items-center justify-center w-10 h-10 text-3xl border text-primary border-primary">
                <MenuIcon />
              </button>
            )}

            {!open && (
              <button className="flex items-center justify-center w-10 h-10 text-3xl border text-primary border-primary">
                <CloseIcon />
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            {role && (
              <div className="flex items-center">
                <ProfilePopover role={role} />
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

        <nav className="">
          <ul
            className={`flex bg-yellow-50/90 fixed top-[80px] z-20 h-full flex-col gap-2 font-semibold text-[#212529] pt-5 pl-8 w-[180px] -translate-x-[100%] transition-transform duration-500 ${
              !open && 'translate-x-0'
            }`}
          >
            {menuItems}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
