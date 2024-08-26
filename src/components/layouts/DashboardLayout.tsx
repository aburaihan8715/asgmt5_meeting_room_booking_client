import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import BrandLogo from '../ui/BrandLogo';

const DashboardLayout = () => {
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

export default DashboardLayout;
