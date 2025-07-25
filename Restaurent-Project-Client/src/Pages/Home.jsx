import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import HomeBg from '../components/HomeBg';
import PopularMenu from '../components/PopularMenu';
import ChiefRe from '../components/ChiefRe';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Bistro Boss Restaurant</title>

      </Helmet>
     <Banner></Banner>
     <Category></Category>
     <HomeBg></HomeBg>
     <PopularMenu></PopularMenu>
     <ChiefRe></ChiefRe>
     <Featured></Featured>
     <Testimonials></Testimonials>
      
    </div>
  );
};

export default Home;