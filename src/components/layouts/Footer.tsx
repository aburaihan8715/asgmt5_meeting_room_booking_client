import BrandLogo from '../ui/BrandLogo';

import FacebookIcon from '@/assets/icons/FacebookIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import LinkedinIcon from '@/assets/icons/LinkedinIcon';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import { Link } from 'react-router-dom';

const date = new Date().toDateString().slice(4);

const Footer = () => {
  return (
    <footer className="text-[#212529] bg-orange-50 md:px-10 px-1">
      <div className="flex flex-col flex-wrap gap-10 p-1 py-24 mx-auto border-b-2 md:items-center lg:items-start md:flex-row md:flex-nowrap">
        {/* BRAND LOGO */}
        <div className="flex-shrink-0 w-full mx-auto text-center md:w-64 md:mx-0 md:text-left">
          <Link
            to="/"
            className="flex items-center justify-center font-medium text-[#212529] title-font md:justify-start"
          >
            <BrandLogo />
          </Link>
          <p className="mt-4 text-wrap text-sm text-[#212529]">
            A great keyboard is a symphony for your fingers
          </p>
        </div>

        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          {/* PAGES LINKS */}
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-semibold tracking-widest text-[#212529] title-font">
              PAGES LINKS
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link
                  to="/"
                  className="text-[#212529] hover:text-gray-800 hover:underline hover:scale-105 transition-transform duration-150"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-[#212529] hover:text-gray-800 hover:underline hover:scale-105 transition-transform duration-150"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-[#212529] hover:text-gray-800 hover:underline hover:scale-105 transition-transform duration-150"
                >
                  Dashboard
                </Link>
              </li>
            </nav>
          </div>

          {/* COMPANY */}
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-semibold tracking-widest text-[#212529] title-font">
              COMPANY
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link
                  to="/about"
                  className="text-[#212529] hover:text-gray-800 hover:underline hover:scale-105 transition-transform duration-150"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#212529] hover:text-gray-800 hover:underline hover:scale-105 transition-transform duration-150"
                >
                  Contact us
                </Link>
              </li>
            </nav>
          </div>

          {/* LEGAL */}
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-semibold tracking-widest text-[#212529] title-font">
              LEGAL
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-[#212529] hover:text-gray-800">
                  Terms of use
                </a>
              </li>
              <li>
                <a className="text-[#212529] hover:text-gray-800">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="text-[#212529] hover:text-gray-800">
                  Cookie policy
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col flex-wrap py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-[#212529] sm:text-left">
            &copy; {date} TuneTech
          </p>

          {/* SOCIAL LINKS */}
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-[#212529]"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-[#212529]"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-[#212529]"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-[#212529]"
            >
              <LinkedinIcon />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
