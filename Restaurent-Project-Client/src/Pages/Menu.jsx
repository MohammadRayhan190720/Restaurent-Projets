import {Helmet} from "react-helmet-async";
import Cover from "../components/shared/Cover";
import MenuImage from '../assets/menu/banner3.jpg'

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Our Menu - Bistro Boss Restaurant</title>
  
      </Helmet>
     <Cover img={MenuImage} title="Our Menu">

     </Cover>

      
    </div>
  );
};

export default Menu;