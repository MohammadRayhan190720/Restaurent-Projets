import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const MainLayouts = () => {
  const location = useLocation();
  console.log(location)
  
  const noHeaderFooter = location.pathname.includes('login')
  return (
    <div className="mx-auto border font-fontInter max-w-7xl">
      { noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      { noHeaderFooter || <Footer></Footer>}
      
      
    </div>
  );
};

export default MainLayouts;