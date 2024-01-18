import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import { FaInbox } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Sidebar = () => {
  const [isActive, setActive] = useState(true);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="text-gray-800 flex  md:hidden">
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 z-20 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
        <div className="my-2 flex">
              <img
                src="https://i.ibb.co/0MtxH7T/Picsart-24-01-18-10-33-37-005.png"
                className="h-10 mr-3"
              />
              <span className="self-center text-black text-2xl font-extrabold whitespace-nowrap ">
                SwiftInbox
              </span>
            </div>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed  overflow-x-hidden border-r-2 border-gray-200 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive ? "-translate-x-full " : "bg-gray-200 md:bg-white"
        }  md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto">
              <Link to={"/"}>
              <div className="my-2 flex">
              <img
                src="https://i.ibb.co/0MtxH7T/Picsart-24-01-18-10-33-37-005.png"
                className="h-10 mr-3"
              />
              <span className="self-center text-black text-2xl font-extrabold whitespace-nowrap ">
                SwiftInbox
              </span>
            </div>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <>
                <Menu icon={FaInbox} label="Inbox" address="/" />
                <Menu
                  icon={MdOutlineConnectWithoutContact}
                  label="Contact Us"
                  address="/contact"
                />
                <Menu icon={CiSquareInfo} label="About Us" address="about" />
              </>
              {/* Menu Items */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
