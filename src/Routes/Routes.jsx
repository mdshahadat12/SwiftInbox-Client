import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import About from "../Page/About";
import ContactUs from "../Page/ContactUs";
import App from "../App";
import InboxDetails from "../Page/InboxDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <App></App>,
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
]);
