import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import HomeBg from '../components/HomeBg';
import PopularMenu from '../components/PopularMenu';

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <Category></Category>
     <HomeBg></HomeBg>
     <PopularMenu></PopularMenu>
      
    </div>
  );
};

export default Home;