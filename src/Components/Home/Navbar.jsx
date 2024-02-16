import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <div className="navbar bg-blue-800/15 shadow-md md:sticky rounded-md top-0 md:z-50 backdrop-blur text-white">
      <div className="flex-1">
        <a className="text-lg font-bold bg-gradient-to-r from-lime-400 via-lime-500 to-green-600 text-transparent bg-clip-text">
          {user ? user?.displayName : <p>Guest</p>}
        </a>
      </div>
      <div className="flex-none">
        <div className="flex gap-4 justify-end items-center">
          {user ? (
            <div className="justify-end flex items-center gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                      <img
                        className="w-8 h-8 rounded-full"
                        src={user?.photoURL}
                      />
                    ) : (
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm mr-4 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-20"
                >
                  <p
                    className="px-3 cursor-pointer py-2 rounded-lg bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white font-black hover:bg-gradient-to-l"
                    onClick={handleLogOut}
                  >
                    Logout
                  </p>
                  <Link to={"/dashboard"}>
                    <p className="px-3 mt-2 cursor-pointer py-2 rounded-lg bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white font-black hover:bg-gradient-to-l">
                      Dashboard
                    </p>
                  </Link>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 rounded-md shadow-xl text-white font-bold  bg-gradient-to-r from-lime-700 to-lime-900 hover:bg-gradient-to-l"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
