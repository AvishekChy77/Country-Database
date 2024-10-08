import { createBrowserRouter } from "react-router-dom";

import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import CountryDetails from "../Pages/CountryDetails";
import ErrorPage from "../Pages/ErrorPage";
import Blogs from "../Pages/Blogs";
import Favourite from "../Pages/Favourite";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/blog",
            element: <Blogs/>
        },
        {
            path: "/favourite",
            element: <Favourite/>
        },
        {
            path: "/countryDetails/:countryName",
            element: <CountryDetails/>,
        },
      ]
    },
  ]);

export default Router;


