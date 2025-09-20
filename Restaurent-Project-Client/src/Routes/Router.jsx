import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import OrderFood from "../Pages/OrderFood";
import Login from "../Pages/Login";

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
        path: "/orderFood/:category",
        element: <OrderFood></OrderFood>

      },
      {
        path: "/login",
        element: <Login></Login>

      },

    ]
  }

]);