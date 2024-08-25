import BrandLogo from '../ui/BrandLogo';
import { FaCartShopping } from 'react-icons/fa6';
import { Button } from '../ui/button';
import ActiveLink from '../ui/ActiveLink';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import MenuIcon from '@/assets/icons/MenuIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <header>
      {/* DESKTOP NAV */}
      <div className="md:flex hidden bg-slate-50 justify-between h-[80px] items-center px-10 fixed top-0 w-full z-20">
        {/* LOGO */}
        <Link to="/">
          <BrandLogo />
        </Link>
        <nav>
          <ul className="flex gap-4 font-semibold text-[#212529]">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/products">Products</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/about">About Us</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/contact">Contact Us</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard">Dashboard</ActiveLink>
            </li>
          </ul>
        </nav>

        {/* CART,LOGIN,PROFILE GROUP */}
        <div className="flex items-center gap-4">
          <div>
            <Link to="/cart">
              <div className="relative mr-2">
                <FaCartShopping className="text-base text-[#212529]" />
                <span className="absolute flex items-center justify-center w-5 h-5 font-semibold rounded-full bg-primary text-slate-50 -top-3 left-3">
                  {0}
                </span>
              </div>
            </Link>
          </div>
          <div>
            <Button onClick={() => alert('Not implement yet')}>
              Login
            </Button>
          </div>
          <div>
            <img
              onClick={() => alert('Not implemented yet!')}
              className="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_640.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="md:hidden">
        <div className="flex px-2 bg-[#e9effd] h-[80px] items-center justify-between fixed top-0 w-full z-20">
          <div onClick={() => setOpen(!open)} className="">
            {open && (
              <button className="border w-10 h-10 flex justify-center items-center text-3xl text-primary border-primary">
                <MenuIcon />
              </button>
            )}

            {!open && (
              <button className="border w-10 h-10 flex justify-center items-center text-3xl text-primary border-primary">
                <CloseIcon />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="mr-1">
              <Link to="/cart">
                <div className="relative mr-2">
                  <FaCartShopping className="text-base text-[#212529]" />
                  <span className="absolute flex items-center justify-center w-5 h-5 font-semibold rounded-full bg-primary text-[#f8f9fa] -top-3 left-3">
                    {0}
                  </span>
                </div>
              </Link>
            </div>

            <div>
              <Button
                className="text-base"
                onClick={() => alert('Not implement yet')}
              >
                Login
              </Button>
            </div>

            <div>
              <img
                onClick={() => alert('Not implemented yet!')}
                className="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_640.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <nav className="">
          <ul
            className={`flex bg-yellow-50/90 fixed top-[80px] z-20 h-full flex-col gap-2 font-semibold text-[#212529] pt-5 pl-8 w-[180px] -translate-x-[100%] transition-transform duration-500 ${
              !open && 'translate-x-0'
            }`}
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/products">Products</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/about">About Us</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/contact">Contact Us</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard">Dashboard</ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
