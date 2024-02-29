import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import About from "../Page/About";
import ContactUs from "../Page/ContactUs";
import App from "../App";
import InboxDetails from "../Page/InboxDetails";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Error from "../Page/Error/Error";
import Bookmarks from "../Page/Bookmarks";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Page/Profile";
import ManageUser from "../Page/ManageUser";
import AllMessage from "../Page/AllMessage";
import Faq from "../Page/Faq";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/bookmark",
        element: <Bookmarks></Bookmarks>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>
      },
      {
        path: "/inbox/:id",
        element: <InboxDetails></InboxDetails>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path:"/dashboard",
        element:<Profile></Profile>
      },
      {
        path:"manageuser",
        element:<ManageUser></ManageUser>
      },
      {
        path:"allmessage",
        element:<AllMessage></AllMessage>
      }
    ]
  },
]);
