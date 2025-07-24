import SectionTitle from "./shared/SectionTitle";
import featuredImage from '../assets/home/featured.jpg'

const Featured = () => {
  return (
    <div className="bg-featureBg bg-fixed bg-cover bg-center py-10">
      <SectionTitle
        subHeading={"From Our Menu"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="flex justify-center items-center p-10">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className=" text-white p-10 bg-slate-400 bg-opacity-60">
          <p>20 June 2025</p>
          <h3 className="text-xl uppercase">Where get I Food</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ducimus sapiente voluptas exercitationem necessitatibus modi, dolor
            tempore eligendi similique dicta, cum quidem consequuntur? Molestias
            ab fuga distinctio rerum! Consequuntur labore at nesciunt
            accusantium quidem, delectus, error aspernatur minus animi mollitia
            reprehenderit cupiditate veritatis nihil ipsam quia, a esse omnis!
            Tempora.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;