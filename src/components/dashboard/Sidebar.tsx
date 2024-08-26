import ActiveLink from '../ui/ActiveLink';

import { FaClipboardList, FaHome, FaPlusSquare } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <li className="flex">
          <ActiveLink className="flex items-center gap-2" to="/">
            <FaHome className="text-2xl md:text-base" />
            <span className="hidden md:block">Home</span>
          </ActiveLink>
        </li>
        <li className="flex">
          <ActiveLink
            className="flex items-center gap-2"
            to="product-list"
          >
            <FaClipboardList className="text-2xl md:text-base" />
            <span className="hidden md:block">Product List</span>
          </ActiveLink>
        </li>
        <li className="flex">
          <ActiveLink className="flex items-center gap-2" to="add-product">
            <FaPlusSquare className="text-2xl md:text-base" />
            <span className="hidden md:block">Add Product</span>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
