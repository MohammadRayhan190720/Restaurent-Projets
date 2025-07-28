import cardImage from '../assets/home/slide1.jpg'
const CheifReCard = () => {
  return (
    <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2 lg:grid-cols-3">
      <div className="shadow-xl card bg-base-100">
        <figure className="px-10 pt-10">
          <img src={cardImage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="mt-4 border-0 border-b-4 btn btn-outline">
              Order Now
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="shadow-xl card bg-base-100">
        <figure className="px-10 pt-10">
          <img src={cardimage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="mt-4 border-0 border-b-4 btn btn-outline">
              Order Now
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="shadow-xl card bg-base-100">
        <figure className="px-10 pt-10">
          <img src={cardimage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="mt-4 border-0 border-b-4 btn btn-outline">
              Order Now
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheifReCard;