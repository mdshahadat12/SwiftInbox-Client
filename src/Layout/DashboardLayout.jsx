import { Outlet } from "react-router-dom"
import { ToastContainer, Zoom } from "react-toastify"
import DashboardSidebar from "../Components/DashboardSidebar"

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
      <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
      </>
    )
  }
  
  export default DashboardLayout