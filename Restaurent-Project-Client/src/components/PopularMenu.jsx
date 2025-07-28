import React, { useEffect, useState } from 'react';
import SectionTitle from './shared/SectionTitle';
import MenuItem from './shared/MenuItem';
import useMenu from '../hooks/useMenu';

const PopularMenu = () => {
  //useing custom hook
  const [menu] = useMenu();
  const popularItems = menu.filter(item => item.category === 'popular');
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch('menu.json')
  //   .then(res => res.json())
  //   .then(data => {
  //     const popularItems = data.filter(item => item.category === 'popular');
  //     setMenu(popularItems);
  //   })
  // }, []);
  return (
    <div>
      <SectionTitle subHeading={"Check it out"} heading={"Popular Menu"}>

      </SectionTitle>

      <div className='mb-10'>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularItems.map(item => (
            <MenuItem key={item._id} item={item}></MenuItem>
            
           
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default PopularMenu;