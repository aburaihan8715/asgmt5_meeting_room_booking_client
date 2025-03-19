import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface IProps {
  className?: string;
  children: ReactNode;
  href?: string;
  btn?: boolean;
}

const ActiveLinkDashboard = ({
  className = '',
  children,
  href,
  btn,
}: IProps) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {href && (
        <Link
          to={href}
          className={`${className} ${
            isActive || isHovered ? 'bg-gray-400/30' : ''
          } rounded-md px-2 py-1`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </Link>
      )}

      {btn && (
        <button
          className={`${className} ${
            isActive || isHovered ? 'bg-gray-400/30' : ''
          } rounded-md px-2 py-1`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default ActiveLinkDashboard;
