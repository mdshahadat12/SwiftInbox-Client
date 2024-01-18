import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Inbox from "../Page/Inbox";
import About from "../Page/About";
import ContactUs from "../Page/ContactUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path: "/",
                element:<Inbox></Inbox>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/about",
                element:<About></About>
            },
                ]
    }
])