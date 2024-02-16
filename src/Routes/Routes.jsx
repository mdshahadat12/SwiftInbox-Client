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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

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
        element: (
          <PrivateRoute>
            <Bookmarks></Bookmarks>
          </PrivateRoute>
        ),
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Profile></Profile>,
      },
      {
        path: "manageuser",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <ManageUser></ManageUser>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "allmessage",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <AllMessage></AllMessage>
            </PrivateRoute>
          </AdminRoute>
        ),
      },
    ],
  },
]);
