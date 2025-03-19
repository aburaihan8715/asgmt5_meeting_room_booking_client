import BrandLogo from '@/components/common/BrandLogo';
import LogoutButton from '@/components/common/LogoutButton';
import ProfileButton from '@/components/common/ProfileButton';
import { useAppSelector } from '@/redux/hooks';

import { ReactNode } from 'react';

import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router';

interface NavbarProps {
  setIsOpen: (isOpen: boolean) => void;
  links?: ReactNode;
}
const Navbar = ({ setIsOpen, links }: NavbarProps) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className="sticky top-0 right-0 z-50 w-full px-1 bg-white">
      <div className="sticky top-0 z-20 flex h-[70px] w-full items-center gap-5 shadow md:px-10">
        <div className="hidden md:block">
          <Link to={`/`}>
            <BrandLogo />
          </Link>
        </div>
        {/* menu button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-10 h-10 text-3xl border rounded border-gray-700/50 md:hidden"
        >
          <MdMenu />
        </button>

        {/* LOGIN,PROFILE GROUP */}
        <div className="flex items-center gap-4 ml-auto">
          {links && (
            <ul className="hidden gap-4 font-semibold text-gray-700 md:flex">
              {links}
            </ul>
          )}

          {user && (
            <div className="flex items-center">
              <ProfileButton />
            </div>
          )}

          {user && <LogoutButton />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
