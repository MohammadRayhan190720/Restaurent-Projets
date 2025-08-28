import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import orderCover from '../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import useMenu from "../hooks/useMenu";
import OrderTab from "../components/OrderTab";
import { useParams } from "react-router-dom";

const OrderFood = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  console.log(category);

  const drinksItems = menu.filter((item) => item.category === "drinks");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const saladItems = menu.filter((item) => item.category === "salad");
  const soupItems = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Order Food - Bistro Boss Restaurant</title>
      </Helmet>

      <Cover img={orderCover} title={"Our Shop"}></Cover>
      <Tabs
        className="mx-auto max-w-7xl my-7"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={saladItems}> </OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzaItems}> </OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soupItems}> </OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessertItems}> </OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinksItems}> </OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;