import React from 'react';

const MenuItem = ({item}) => {
  // console.log(item);
  const {name, image, price, recipe} = item;
  return (
    <div className="flex gap-5">
      <div>
        <img
          className="rounded-t-none rounded-b-full rounded-s-full rounded-e-full"
          src={image}
          alt=""
        />
      </div>
      <div className="">
        <h3 className=" uppercase">{name}-----------------</h3>
        <p className="text-gray-400">{recipe.slice(0,50)}</p>
      </div>

      <div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;