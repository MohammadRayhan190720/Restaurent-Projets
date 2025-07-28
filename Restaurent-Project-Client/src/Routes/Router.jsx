import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import OrderFood from "../Pages/OrderFood";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/menu",
        element: <Menu></Menu>

      },
      {
        path: "/orderFood",
        element: <OrderFood></OrderFood>

      },

    ]
  }

]);