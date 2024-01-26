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
    <div className="navbar shadow-md md:sticky rounded-md top-0 md:z-50 backdrop-blur">
      <div className="flex-1">
        <a className="text-xl">{user ? user?.displayName : <p>Guest</p>}</a>
      </div>
      <div className="flex-none">
        {/* <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
        <div className="flex gap-4 justify-end items-center">
          {user ? (
            <div className="justify-end flex items-center gap-2">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost ">
                  <img className="w-8 h-8 rounded-full" src={user?.photoURL} />
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
                >
                  <div className="p-3 text-left flex flex-col space-y-3">
                    <p className="text-red-600" onClick={handleLogOut}>
                      Logout
                    </p>
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login" className="font-semibold">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
