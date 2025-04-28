import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


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