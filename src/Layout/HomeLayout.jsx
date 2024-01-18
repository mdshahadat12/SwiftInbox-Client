import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Home/Sidebar";
import Navbar from "../Components/Home/Navbar";

const HomeLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
        <Sidebar/>
        <div className='flex-1  md:ml-64'>
          <div className='p-5'>
            <Navbar/>
            <Outlet/>
          </div>
        </div>
      </div>
    );
};

export default HomeLayout;