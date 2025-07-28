import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import orderCover from '../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import FoodCard from "../components/FoodCard";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  
    const offered = menu.filter((item) => item.category === "offered");
    const deserts = menu.filter((item) => item.category === "dessert");
    const salads = menu.filter((item) => item.category === "salad");
    const pizzas = menu.filter((item) => item.category === "pizza");
    const soups = menu.filter((item) => item.category === "soup");


  return (
    <div>
      <Helmet>
        <title>Order Food - Bistro Boss Restaurant</title>
      </Helmet>

      <Cover img={orderCover} title={"Our Shop"}>
        {" "}
      </Cover>
      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      ></Tabs>
      <Tabs>
        <TabList>
          <Tab>Salads</Tab>
          <Tab>Pizzas</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2 lg:grid-cols-3">
            {salads.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;