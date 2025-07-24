import SectionTitle from "./shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { SiApostrophe } from "react-icons/si";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [reviews,setReviews] = useState([]);
  console.log(reviews);

  useEffect(() =>{
    fetch('review.json')
    .then(res => res.json())
    .then(data => {
      setReviews(data);
    })
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading={"What Our Customers Say"}
        heading={"Testimonials"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex items-center justify-center px-10 flex-col my-10 ">
              <div className="my-6"> 
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </div>

              <SiApostrophe className="text-6xl mb-6"></SiApostrophe>
              <p className="mb-6">{review.details}</p>
              <h3 className="text-2xl text-orange-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;