/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Menu = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center text-white px-4 py-2 my-5 rounded-lg transition-colors duration-300 transform hover:bg-[#33bba765]${
          isActive
            ? "rounded-lg bg-[#33bba7a2] "
            : ""
        }`
      }
    >
      <Icon className="w-4  h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default Menu;
