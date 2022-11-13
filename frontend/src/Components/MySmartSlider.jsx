import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//  dispatch = useDispatch();

import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getProducts } from "../Redux/App/action";
import VegCard from "./vegCard";
import styled from "styled-components";
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';


export default function MySmartSlider({title}) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { products } = useSelector((store) => store.AppReducer);


  const getProductData = () => {
    dispatch(getProducts())
      .then((res) => { })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProductData();
  }, []);
  return (
    <MysmartSlider>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        className="mySwiper"
        modules={[Autoplay]}
        autoplay={true}
      // sx={{width:"80%"}}
      >
        <div style={{ width: "80%", display: "grid", gridTemplateColumns: 'repeat(auto-fit,minmax(250px,max-content))', gridGap: "2rem", justifyContent: 'center' }} >
          {products.length > 0 && products?.map((product) => (
            product.category[1] === title && <SwiperSlide key={product._id}>
              <VegCard productId={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </MysmartSlider>
  );

}

const MysmartSlider = styled.div`
width:85%;
margin:auto

`
