/*
import { Link, Outlet } from 'react-router';

import BrandLogo from '../common/BrandLogo';
import Sidebar from '../common/Sidebar';

const AdminLayout = () => {
  return (
    <>
      <div className="flex">
        <div>
          <div className="sticky top-0 bottom-0 md:flex-1 md:h-screen ">
            <div className=" bg-[#e9effd] h-screen md:p-5 p-1 md:pl-10">
              <Link className="hidden md:block" to="/">
                <BrandLogo />
              </Link>
              <div className="mt-5">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex-[4] p-5 flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
*/

import { useState } from 'react';

import Drawer from '@/components/common/Drawer';
import Navbar from '../common/Navbar';
import DashboardSidebar from '../common/DashboardSidebar';
import { Outlet } from 'react-router';

import {
  FaMoneyBillWave,
  FaRegNewspaper,
  FaTachometerAlt,
  FaUsers,
} from 'react-icons/fa';
import ActiveLinkDashboard from '../common/ActiveLinkDashboard';

const adminSidebarLinks = (
  <>
    <p className="text-xs font-semibold uppercase opacity-50">Admin</p>

    <li className="flex">
      <ActiveLinkDashboard
        className="flex items-center w-full gap-2"
        href="/admin/dashboard"
      >
        <FaTachometerAlt className="text-base" />
        <span className="">Dashboard</span>
      </ActiveLinkDashboard>
    </li>

    <li className="flex">
      <ActiveLinkDashboard
        className="flex items-center w-full gap-2"
        href="/admin/all-rooms"
      >
        <FaRegNewspaper className="text-base" />
        <span className="">Rooms</span>
      </ActiveLinkDashboard>
    </li>

    <li className="flex">
      <ActiveLinkDashboard
        className="flex items-center w-full gap-2"
        href="/admin/all-slots"
      >
        <FaUsers className="text-base" />
        <span className="">Slots</span>
      </ActiveLinkDashboard>
    </li>

    <li className="flex">
      <ActiveLinkDashboard
        className="flex items-center w-full gap-2"
        href="/admin/all-users"
      >
        <FaMoneyBillWave className="text-base" />
        <span className="">Users</span>
      </ActiveLinkDashboard>
    </li>

    {/* <li className="flex">
      <ActiveLinkDashboard
        className="flex items-center w-full gap-2"
        href="/admin/payments"
      >
        <FaMoneyBillWave className="text-base" />
        <span className="">Payments</span>
      </ActiveLinkDashboard>
    </li> */}

    {/* <p className="text-xs font-semibold uppercase opacity-50">Settings</p>
    <li className="flex">
      <ActiveLinkDashboard
        className="flex items-center w-full gap-2"
        href="/settings"
      >
        <FaCog className="text-base" />
        <span className="">Profile settings</span>
      </ActiveLinkDashboard>
    </li> */}
    {/* <li className="flex">
      <ActiveLinkDashboard
        className="flex items-center w-full gap-2"
        href="/profile"
      >
        <FaUserCircle className="text-base" />
        <span className="">Profile</span>
      </ActiveLinkDashboard>
    </li> */}
  </>
);

export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar setIsOpen={setIsOpen} />

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar with Sticky Fix */}
        <div className="hidden md:block md:w-[250px]">
          <div className="fixed bottom-0 top-[80px] h-screen overflow-y-auto border-r pl-10 pr-2 pt-5 md:w-[250px]">
            <DashboardSidebar links={adminSidebarLinks} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 pt-4 pb-4 pl-4 pr-10 overflow-y-auto">
          <Outlet />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ul className="flex flex-col gap-3 font-semibold text-gray-700">
          {adminSidebarLinks}
        </ul>
      </Drawer>
    </>
  );
}
