import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import { Children } from "react";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },

    ]
  }

]);