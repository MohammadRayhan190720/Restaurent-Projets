import React, { useEffect, useState } from 'react';
import SectionTitle from './shared/SectionTitle';
import MenuItem from './shared/MenuItem';

const PopularMenu = () => {
  
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
      const popularItems = data.filter(item => item.category === 'popular');
      setMenu(popularItems);
    })
  }, []);
  return (
    <div>
      <SectionTitle subHeading={"Check it out"} heading={"Popular Menu"}>

      </SectionTitle>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map(item => (
            <MenuItem key={item._id} item={item}></MenuItem>
            
           
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default PopularMenu;