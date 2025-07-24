import cardimage from '../assets/home/slide1.jpg'
const CheifReCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={cardimage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order Now
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={cardimage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order Now
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={cardimage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order Now
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheifReCard;