import React from 'react';

const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;


  return (
    <div className="shadow-xl card bg-base-100">
      <figure className="">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className='absolute right-0 p-2 mt-4 mr-6 text-white bg-slate-900'>{price}</p>
      <div className="items-center text-center card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions">
          <button className="mt-4 border-0 border-b-4 btn btn-outline">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;