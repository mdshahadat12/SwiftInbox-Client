import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Home/Sidebar";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          <Navbar />
          <div className="min-h-screen">
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
