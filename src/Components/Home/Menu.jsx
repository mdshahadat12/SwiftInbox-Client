/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Menu = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:text-gray-700 ${
          isActive
            ? "rounded-lg outline outline-2 outline-accent  text-gray-700"
            : "text-gray-600"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default Menu;
