import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Box from "@mui/material/Box";
import { FreeMode, Navigation, Thumbs } from "swiper";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/App/action";
import HomeHead from "./HomeHead";
import styled from "styled-components";
import MySmartSlider from "./MySmartSlider";

const { REACT_APP_API_URL } = process.env;

const HomePage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.AppReducer);
  // console.log(products);
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
    <Container>
      <Swiper
        spaceBetween={3}
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
              <SwiperSlide sx={{ width: "100%" }}>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                />
              </SwiperSlide>
            )
        )}
      </Swiper>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(160px,max-content))",
          justifyContent: "center",
          gap: "15px",
          marginTop: "30px",
          overflow: "hidden"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "neupass" && (
              <Box sx={{

                overflow: "hidden"
              }}>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height="60px"
                />
              </Box>
            )
        )}
      </Box>

      <HomeHead heading={"My Smart Basket"} />
      <MySmartSlider title={'Fruit & Vegetables'} />





      <HomeHead heading={"Bank Offers"} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(270px,max-content))",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          overflow: "hidden",
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "banks" && (
              <Box
                sx={{
                  "&:hover": {
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                  }
                }}
              >
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  height="200px"
                // box-shadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
                />
              </Box>
            )
        )}
      </Box>

      <HomeHead heading={"Best Seller"} />
      <MySmartSlider title={'Bakery Cake & Dairy'} />

      <HomeHead heading={"Top Offers"} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,max-content))",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          overflow: "hidden",
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "dealsWeek" && (
              <Box
                sx={{
                  "&:hover": {
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
                  },


                }}
              >
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width="260px"
                  height="160px"
                />
              </Box>
            )
        )}
      </Box>


      <HomeHead heading={"Fruits & Vegitables"} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,max-content))",
          justifyContent: "center",
          // gap: "5px",
          marginTop: "30px",
          overflow: "hidden",
          // width:"85%",
          margin: "auto"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "fruitsSabji" && (
              <Box
                sx={{
                  "&:hover": {
                    boxShadow: ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
                  },
                  marginTop: "20px",


                }}
              >
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width="180px"
                  height="150px"
                />
              </Box>
            )
        )}
      </Box>


      <HomeHead heading={"Your Daily Staples"} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,max-content))",
          justifyContent: "center",
          // gap: "5px",
          marginTop: "30px",
          overflow: "hidden",
          // width:"85%",
          margin: "auto"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "DailyStaples" && (
              <Box
                sx={{
                  "&:hover": {
                    boxShadow: ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
                  },
                  marginTop: "20px",


                }}
              >
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width="180px"
                  height="150px"
                />
              </Box>
            )
        )}
      </Box>


      <HomeHead heading={"Beverages"} />
      <Box
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
        className='boxes'
      >
        <Box sx={{ width: { xs: "100%", md: "40%" }, overflow: 'hidden' }} className='beverage'>
          {products?.map(
            (ele, index) =>
              ele.name === "bgiLeft1" && (
                <Box>
                  <img
                    src={`${REACT_APP_API_URL}${ele.img_path}`}
                    alt={ele.name}
                    width="435px"
                    height="330px"
                  />
                </Box>
              )
          )}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,max-content))",
            overflow: "hidden",
            width: { xs: "85%", md: "50%" },
            justifyContent: 'center',
            gap: '20px'
          }}
          className='beverage'
        >
          {products?.map(
            (ele, index) =>
              ele.name === "smallRight1" && (
                <Box>
                  <img
                    src={`${REACT_APP_API_URL}${ele.img_path}`}
                    alt={ele.name}
                    height="150px"
                  />
                </Box>
              )
          )}
        </Box>
      </Box>


      <HomeHead heading={"Snack Store"} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,max-content))",
          justifyContent: "center",
          // gap: "5px",
          marginTop: "30px",
          overflow: "hidden",
          // width:"85%",
          margin: "auto"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "snackStore" && (
              <Box
                sx={{
                  "&:hover": {
                    boxShadow: ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
                  },
                  marginTop: "20px",


                }}
              >
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width="180px"
                  height="150px"
                />
              </Box>
            )
        )}
      </Box>


      <HomeHead heading={"Cleaning & Householding"} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,max-content))",
          justifyContent: "center",
          // gap: "5px",
          marginTop: "30px",
          overflow: "hidden",
          // width:"85%",
          margin: "auto"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "household" && (
              <Box
                sx={{
                  "&:hover": {
                    boxShadow: ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
                  },
                  marginTop: "20px",


                }}
              >
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width="260px"
                  height="200px"
                />
              </Box>
            )
        )}
      </Box>




      <HomeHead heading={"Beauty & Hygiene"} />
      <Box
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
        className='boxes'
      >
        <Box sx={{ width: { xs: "100%", md: "40%" }, overflow: 'hidden' }} className='beverage'>
          {products?.map(
            (ele, index) =>
              ele.name === "bigLeft2" && (
                <Box>
                  <img
                    src={`${REACT_APP_API_URL}${ele.img_path}`}
                    alt={ele.name}
                    width="435px"
                    height="330px"
                  />
                </Box>
              )
          )}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,max-content))",
            overflow: "hidden",
            width: { xs: "85%", md: "50%" },
            justifyContent: 'center',
            gap: '20px'
          }}
          className='beverage'
        >
          {products?.map(
            (ele, index) =>
              ele.name === "smallRight2" && (
                <Box>
                  <img
                    src={`${REACT_APP_API_URL}${ele.img_path}`}
                    alt={ele.name}
                    height="150px"
                  />
                </Box>
              )
          )}
        </Box>
      </Box>


      <HomeHead heading={"Home & Kitchen Essentials"} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,max-content))",
          justifyContent: "center",
          // gap: "5px",
          marginTop: "30px",
          overflow: "hidden",
          // width:"85%",
          margin: "auto"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "KitchenEssentials" && (
              <Box
                sx={{
                  "&:hover": {
                    boxShadow: ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
                  },
                  marginTop: "20px"


                }}
              >
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width="180px"
                  height="150px"
                />
              </Box>
            )
        )}
      </Box>

      <Box sx={{ marginTop: '50px' }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={4}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="lastSwiper"

        >
          {products?.map(
            (ele, index) =>
              ele.name === "carouselLast2" && (
                <SwiperSlide>
                  <img
                    src={`${REACT_APP_API_URL}${ele.img_path}`}
                    alt={ele.name}
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </Box>


      <HomeHead heading={"Brand Store"} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(170px,max-content))",
          justifyContent: "center",
          // gap: "5px",
          marginTop: "50px",
          overflow: "hidden",
          // width:"85%",
          margin: "auto",
          // border:"1px solid black",
          gap: "10px"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "brandStore" && (
              <Box
                sx={{
                  "&:hover": {
                    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;'

                  },
                  border: "1px solid #e1e1e1",
                  marginTop: "20px",

                }}
              >
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width="170px"
                  height="150px"
                />
              </Box>
            )
        )}
      </Box>

      <Box sx={{ width: "80%", border: "1px solid black", margin: "auto", marginTop: "10px", padding: "20px", textAlign: 'left' }} className="bigboss">
        <h5 style={{ textTransform: 'capitalize' }}>bigbasket – online grocery store</h5>
        <p>Did you ever imagine that the freshest of <span style={{ color: "#84c225" }}>fruits and vegetables</span>, top quality pulses and food grains, dairy products and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? India’s first comprehensive online megastore, bigbasket.com, brings a whopping 20000+ products with more than 1000 brands, to over 4 million happy customers. From household cleaning products to beauty and makeup, bigbasket has everything you need for your daily needs. bigbasket.com is convenience personified We’ve taken away all the stress associated with shopping for daily essentials, and you can now order all your household products and even buy groceries online without travelling long distances or standing in serpentine queues. Add to this the convenience of finding all your requirements at one single source, along with great savings, and you will realize that bigbasket- India’s largest online supermarket, has revolutionized the way India shops for groceries. Online grocery shopping has never been easier. Need things fresh? Whether it’s fruits and vegetables or dairy and meat, we have this covered as well! Get fresh eggs, meat, fish and more online at your convenience. Hassle-free Home Delivery options</p>
        <p>We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products from groceries to snacks <span style={{ color: "#84c225" }}>branded foods</span> reach you in time.</p>
        <ul>
          <li>Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket caters to every schedule.</li>
          <li>Express Delivery: This super useful service can be availed by customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders to your doorstep in 90 Minutes.</li>
          <li>BB Specialty stores: Missed out on buying that essential item from your favorite neighborhood store for tonight’s party? We’ll deliver it for you! From bakery, sweets and meat to flowers and chocolates, we deliver your order in 90 minutes, through a special arrangement with a nearby specialty store
            , verified by us.</li>
        </ul>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  .boxes{
    display: flex;
    align-items:center;
    justify-content: center;
    width:85%;
    gap: 10px;
    overflow: hidden;
    margin:auto;
    flex-wrap: wrap;
  }

  .boxes img{
    border:1px solid #ddd;
    overflow:hidden;

  }
  .bigboss p{
text-align:start
  }
  .bigboss h5{
   text-align:start;
   font-size:20px
  }


  .lastSwiper {
    width:80%;
  border:1px solid #e3dadb;
  
  ${'' /* marginAuto:"" */}
}
@media only screen and (min-width:768px) and (max-width:1100px){
  .lastSwiper{
    img{
      width:100%;
    height:100%
    }
  
  }
       
      }
      
      @media only screen and (min-width:481px) and (max-width:767px){
        .lastSwiper{
          img{
            width:70%;
          height:100%
          }
   
  }
              
      }
            
      @media only screen and (min-width:320px) and (max-width:480px){
        .lastSwiper{
          img{
            width:40%;
         height:100%;
          }
    
  }
  @media only screen and (max-width: 320px){
    .lastSwiper{
      img{
        width:20%;
    height:100%;
      }
    
       
      }

      ${'' /* top Slider */}
      .mySwiper{
        width:100%

      }



      @media only screen and (min-width:768px) and (max-width:1100px){
  .mySwiper{
    img{
      width:90%;
    height:100%
    }
  
  }
       
      }
      
      @media only screen and (min-width:481px) and (max-width:767px){
        .mySwiper{
          img{
            width:70%;
          height:100%
          }
   
  }
              
      }
            
      @media only screen and (min-width:320px) and (max-width:480px){
        .mySwiper{
          img{
            width:40%;
         height:100%;
          }
    
  }
  @media only screen and (max-width: 320px){
    .mySwiper{
      img{
        width:20%;
    height:100%;
      }
    
       
      }

      
`


export default HomePage;
