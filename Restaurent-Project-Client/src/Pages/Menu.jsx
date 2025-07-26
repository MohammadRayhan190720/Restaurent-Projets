import {Helmet} from "react-helmet-async";
import Cover from "../components/shared/Cover";
import MenuImage from '../assets/menu/banner3.jpg'
import PopularMenu from "../components/PopularMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Our Menu - Bistro Boss Restaurant</title>
  
      </Helmet>
     <Cover img={MenuImage} title="Our Menu">

     </Cover>
     <PopularMenu></PopularMenu>
     <Cover img={MenuImage} title="Our Menu">

     </Cover>
     <PopularMenu></PopularMenu>
     <Cover img={MenuImage} title="Our Menu">

     </Cover>
     <PopularMenu></PopularMenu>
      
    </div>
  );
};

export default Menu;