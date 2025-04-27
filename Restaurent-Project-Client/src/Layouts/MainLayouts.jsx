import { Outlet } from "react-router-dom";


const MainLayouts = () => {
  return (
    <div className="font-fontInter max-w-7xl mx-auto border">
      <Outlet></Outlet>
      
      
    </div>
  );
};

export default MainLayouts;