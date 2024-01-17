import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Inbox from "../Page/Inbox";

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
                element: <h1>this contact Us</h1>
            },
            {
                path: "/about",
                element:<h1>this About Us</h1>
            },
                ]
    }
])