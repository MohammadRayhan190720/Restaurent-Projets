import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";


// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "./shared/SectionTitle";
const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Online Order"}
        >
      </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
          <h3 className="text-4xl uppercase text-center -mt-20 text-white shadow-lg p-5">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" />
          <h3 className="text-4xl uppercase text-center -mt-20 text-white shadow-lg p-5">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3" />
          <h3 className="text-4xl uppercase text-center -mt-20 text-white shadow-lg p-5">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide4" />
          <h3 className="text-4xl uppercase text-center -mt-20 text-white shadow-lg p-5">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5" />
          <h3 className="text-4xl uppercase text-center -mt-20 text-white shadow-lg p-5">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5" />
          <h3 className="text-4xl uppercase text-center -mt-20 text-white shadow-lg p-5">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5" />
          <h3 className="text-4xl uppercase text-center -mt-20 text-white shadow-lg p-5">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5" />
          <h3 className="text-4xl uppercase text-center -mt-20 text-white shadow-lg p-5">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5" />
          <h3 className="text-4xl uppercase text-center -mt-20 text-white shadow-lg p-5">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
