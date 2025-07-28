import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="Menu Cover"
      strength={-200}
    >
      <div
        className="hero h-[700px]"
        // style={{
        //   backgroundImage: `url(${img})`,
        // }}
      >
        <div className="hero-overlay"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="py-16 bg-black rounded-lg opacity-50 px-28 font-fontCinzel">
            <h1 className="mb-5 text-5xl font-bold ">{title}</h1>
            <p className="mb-5 text-2xl ">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
