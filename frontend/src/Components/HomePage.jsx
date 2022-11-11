import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

const HomePage = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.bigbasket.com/media/uploads/banner_images/2211651-bbpl-staples_460_Bangalore.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_T1-1600x460_220812.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomePage;
