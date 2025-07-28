import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import orderCover from '../assets/shop/banner2.jpg'

const OrderFood = () => {
  return (
    <div>
      <Helmet>
        <title>Order Food - Bistro Boss Restaurant</title>
      </Helmet>

     <Cover img={orderCover} title={'Our Shop'}> </Cover>
      
    </div>
  );
};

export default OrderFood;