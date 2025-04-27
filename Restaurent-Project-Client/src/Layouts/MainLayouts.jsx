import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";


const MainLayouts = () => {
  return (
    <div className="font-fontInter max-w-7xl mx-auto border">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
      
    </div>
  );
};

export default MainLayouts;