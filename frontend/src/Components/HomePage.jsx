import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/App/action";
const { REACT_APP_API_URL } = process.env;

const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.AppReducer);
  // console.log(products);
  const getProductData = () => {
    dispatch(getProducts())
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductData();
  }, []);

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
        {products?.map(
          (ele, index) =>
            ele.name === "carouselhome1" && (
              <SwiperSlide>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
};

export default HomePage;
