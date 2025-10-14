import Cover from "../components/shared/Cover";
import MenuImage from '../assets/menu/banner3.jpg'
import useMenu from "../hooks/useMenu";
import SectionTitle from "../components/shared/SectionTitle";
import MenuCategory from "../components/shared/MenuCategory";
import desertImage from '../assets/menu/dessert-bg.jpeg';
import pizzaImage from '../assets/menu/pizza-bg.jpg';
import saladImage from '../assets/menu/salad-bg.jpg';
import soupImage from '../assets/menu/soup-bg.jpg';


const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter(item => item.category === 'offered');
  const deserts = menu.filter(item => item.category === 'dessert');
  const salads = menu.filter(item => item.category === 'salad');
  const pizzas = menu.filter(item => item.category === 'pizza');
  const soups = menu.filter(item => item.category === 'soup');
  return (
    <div>
      <Cover img={MenuImage} title='Our Menu'>
        {" "}
      </Cover>
      <SectionTitle
        heading={"Todays Offer"}
        subHeading={"Dont Miss"}
      ></SectionTitle>
      //offered menu
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={deserts}
        img={desertImage}
        title={"deserts"}
      ></MenuCategory>
      <MenuCategory items={salads} img={saladImage} title={'salads'}></MenuCategory>
  
      <MenuCategory items={pizzas} img={pizzaImage} title={'pizzas'}></MenuCategory>
  
      <MenuCategory items={soups} img={soupImage} title={'soups'}></MenuCategory>
    </div>
  );
};

export default Menu;