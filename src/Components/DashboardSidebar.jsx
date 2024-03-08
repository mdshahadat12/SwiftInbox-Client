import { useContext, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { FaInbox, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Menu from "./Home/Menu";

const DashboardSidebar = () => {
  const [isActive, setActive] = useState(true);
  const { userData } = useContext(AuthContext);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="text-gray-800 flex md:hidden">
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 z-20 text-white focus:outline-none"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
        <Link to={"/"} className="my-2 flex">
          <img
            src="https://i.ibb.co/0MtxH7T/Picsart-24-01-18-10-33-37-005.png"
            className="h-10 mr-3"
          />
          <span className="self-center text-white text-2xl font-extrabold whitespace-nowrap ">
            SwiftInbox
          </span>
        </Link>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed  overflow-x-hidden border-r-2 border-gray-200 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive ? "-translate-x-full " : "bg-black md:bg-white"
        }  md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto">
              <Link to={"/"}>
                <div className="my-2 flex">
                  <img
                    src="https://i.ibb.co/0MtxH7T/Picsart-24-01-18-10-33-37-005.png"
                    className="h-10 rounded mr-3"
                  />
                  <span className="self-center text-white text-2xl font-extrabold whitespace-nowrap ">
                    SwiftInbox
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between  flex-1 mt-6">
            <nav>
              <>
                <Menu icon={FaInbox} label="Profile" address="/dashboard" />
                {userData?.role === "admin" && (
                  <>
                    <Menu
                      icon={FaRegBookmark}
                      label="Manage User"
                      address="manageuser"
                    />
                    <Menu
                      icon={MdOutlineConnectWithoutContact}
                      label="All Messages"
                      address="allmessage"
                    />
                  </>
                )}
                {userData?.role === "user" && (
                  <>
                    <Menu
                      icon={GoCodeReview}
                      label="Opinion"
                      address="opinion"
                    />
                  </>
                )}
              </>
              {/* Menu Items */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
