import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import orderCover from '../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import FoodCard from "../components/FoodCard";
import OrderTab from "../components/OrderTab";
import { useParams } from "react-router-dom";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  
  const {category} = useParams();
  console.log(category);
  
    const drinks = menu.filter((item) => item.category === "drinks");
    const deserts = menu.filter((item) => item.category === "dessert");
    const salads = menu.filter((item) => item.category === "salad");
    const pizzas = menu.filter((item) => item.category === "pizza");
    const soups = menu.filter((item) => item.category === "soup");


  return (
    <div >
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
      <Tabs className='mt-7'>
        <TabList>
          <Tab>Salads</Tab>
          <Tab>Pizzas</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salads}> </OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas}> </OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soups}> </OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={deserts}> </OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}> </OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;