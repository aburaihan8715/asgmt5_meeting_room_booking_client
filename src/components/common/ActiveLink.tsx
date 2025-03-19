import { useState } from 'react';
import { NavLink } from 'react-router';

const ActiveLink = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink
      {...props}
      style={({ isActive }) => {
        return {
          borderBottom:
            isActive || isHovered
              ? '2px solid #003B95'
              : '2px solid transparent',
          transition: 'border-bottom 0.1s ease-in-out',
        };
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {props.children}
    </NavLink>
  );
};

export default ActiveLink;
