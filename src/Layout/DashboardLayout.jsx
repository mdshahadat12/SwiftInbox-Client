import { Outlet } from "react-router-dom"
import DashboardSidebar from "../Components/DashboardSidebar"
import { Toaster } from "react-hot-toast"

const DashboardLayout = () => {
    return (
      <>
      <div className='relative min-h-screen md:flex'>
        <DashboardSidebar/>
        <div className='flex-1  md:ml-64'>
          <div className='p-5'>
            <Outlet/>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
      </>
    )
  }
  
  export default DashboardLayout