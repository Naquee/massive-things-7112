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




export default function MySmartSlider() {
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

    console.log(products)
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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        // sx={{width:"80%"}}
      >
      


     
        <div style={{width:"80%", display: "grid", gridTemplateColumns: 'repeat(auto-fit,minmax(250px,max-content))', gridGap: "2rem", justifyContent: 'center' }} >
                        {products.length > 0 && products?.map((product) => (
                            product.category[1] === 'Fruit & Vegetables' && <SwiperSlide key={product._id}>
                                <Link to={`/product/${product._id}/${product.name.replace(/\s+/g, '')}`}>
                                    <VegCard productId={product} />
                                </Link>
                                </SwiperSlide>
                        ))}
                    </div>

      </Swiper>
    </MysmartSlider>
  );
  
}

const MysmartSlider =styled.div`
width:85%;
margin:auto

`
