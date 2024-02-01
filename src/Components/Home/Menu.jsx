/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Menu = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5 rounded-lg transition-colors duration-300 transform hover:bg-[#33bba765] hover:text-gray-700 ${
          isActive
            ? "rounded-lg bg-[#33bba7a2] text-gray-700"
            : "text-gray-600"
        }`
      }
    >
      <Icon className="w-4  h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default Menu;
