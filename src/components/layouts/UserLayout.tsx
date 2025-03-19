import { useState } from 'react';

import Drawer from '@/components/common/Drawer';
import Navbar from '@/components/common/Navbar';
import { Outlet } from 'react-router';

import ActiveLinkDashboard from '@/components/common/ActiveLinkDashboard';
import {
  FaEye,
  FaInfoCircle,
  FaPhoneAlt,
  FaTachometerAlt,
} from 'react-icons/fa';
import DashboardSidebar from '../common/DashboardSidebar';

const userSidebarLinks = (
  <>
    <p className="text-xs font-semibold uppercase opacity-50">User</p>

    <li className="flex">
      <ActiveLinkDashboard
        className="flex w-full items-center gap-2"
        href="/user/dashboard"
      >
        <FaTachometerAlt className="text-base" />
        <span className="">Dashboard</span>
      </ActiveLinkDashboard>
    </li>

    <li className="flex">
      <ActiveLinkDashboard
        className="flex w-full items-center gap-2"
        href="/user/my-bookings"
      >
        <FaEye className="text-base" />
        <span className="">My Bookings</span>
      </ActiveLinkDashboard>
    </li>

    {/* <p className="text-xs font-semibold uppercase opacity-50">Settings</p>

    <li className="flex">
      <ActiveLinkDashboard
        className="flex w-full items-center gap-2"
        href="/settings"
      >
        <FaCog className="text-base" />
        <span className="">Profile settings</span>
      </ActiveLinkDashboard>
    </li> */}

    {/* <li className="flex">
      <ActiveLinkDashboard
        className="flex w-full items-center gap-2"
        href="/profile"
      >
        <FaUserCircle className="text-base" />
        <span className="">Profile</span>
      </ActiveLinkDashboard>
    </li> */}
  </>
);

const userNavbarLinks = (
  <>
    <li className="flex">
      <ActiveLinkDashboard
        className="flex w-full items-center gap-2"
        href="/about"
      >
        <FaInfoCircle className="text-base" />
        <span className="">About</span>
      </ActiveLinkDashboard>
    </li>
    <li className="flex">
      <ActiveLinkDashboard
        className="flex w-full items-center gap-2"
        href="/contact"
      >
        <FaPhoneAlt className="text-base" />
        <span className="">Contact</span>
      </ActiveLinkDashboard>
    </li>
  </>
);

export default function UserLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar setIsOpen={setIsOpen} links={userNavbarLinks} />

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar with Sticky Fix */}
        <div className="hidden md:block md:w-[250px]">
          <div className="fixed bottom-0 top-[80px] h-screen overflow-y-auto border-r pl-10 pr-2 pt-5 md:w-[250px]">
            <DashboardSidebar links={userSidebarLinks} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ul className="flex flex-col gap-3 font-semibold text-gray-700">
          {userSidebarLinks}
        </ul>
      </Drawer>
    </>
  );
}
