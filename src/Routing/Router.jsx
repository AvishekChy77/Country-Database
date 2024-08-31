import { createBrowserRouter } from "react-router-dom";

import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
      ]
    },
  ]);

export default Router;


