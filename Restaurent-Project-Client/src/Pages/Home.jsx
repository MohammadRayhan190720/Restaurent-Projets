import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import HomeBg from '../components/HomeBg';
import PopularMenu from '../components/PopularMenu';
import ChiefRe from '../components/ChiefRe';

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <Category></Category>
     <HomeBg></HomeBg>
     <PopularMenu></PopularMenu>
     <ChiefRe></ChiefRe>
      
    </div>
  );
};

export default Home;