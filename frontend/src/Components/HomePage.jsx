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

const { REACT_APP_API_URL } = process.env;

const HomePage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
    <Container>
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

      <HomeHead heading={"My Smart Basket"}/>
      <Box sx={{width:"85%",margin:"auto",border:"1px solid black",marginTop:"20px"}}>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          // sx={{marginTop:"20px"}}
        >
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </Box>





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
                   boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
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
      <Box sx={{width:"85%",margin:"auto",border:"1px solid black",marginTop:"20px"}}>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          // sx={{marginTop:"20px"}}
        >
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>
        
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </Box>

      
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
                   boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
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
          margin:"auto"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "fruitsSabji" && (
              <Box
               sx={{
                  "&:hover": {
                   boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
                  },
                  marginTop:"20px",
                 
                  
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
          margin:"auto"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "DailyStaples" && (
              <Box
                 sx={{
                  "&:hover": {
                   boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
                  },
                  marginTop:"20px",
                 
                  
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

     
      <HomeHead heading={"Beverages"}/>
      <Box
      sx={{flexDirection:{xs:'column', md:'row'}}}
        className='boxes'
      >
        <Box sx={{ width:{xs:"100%", md:"40%"}, overflow:'hidden'}} className='beverage'>
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
            width:{xs:"85%", md:"50%"},
            justifyContent:'center',
            gap:'20px'
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
          margin:"auto"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "snackStore" && (
              <Box
                 sx={{
                  "&:hover": {
                   boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
                  },
                  marginTop:"20px",
                 
                  
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
          margin:"auto"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "household" && (
              <Box
                 sx={{
                  "&:hover": {
                   boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
                  },
                  marginTop:"20px",
                 
                  
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
      sx={{flexDirection:{xs:'column', md:'row'}}}
        className='boxes'
      >
        <Box sx={{ width:{xs:"100%", md:"40%"}, overflow:'hidden'}} className='beverage'>
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
            width:{xs:"85%", md:"50%"},
            justifyContent:'center',
            gap:'20px'
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
          margin:"auto"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "KitchenEssentials" && (
              <Box
                 sx={{
                  "&:hover": {
                   boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
                  },
                  marginTop:"20px"
                 
                  
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

      <h1>last caresole</h1>
      <Box>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          modules={[Autoplay]}
          className="mySwiper"
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
          margin:"auto",
          // border:"1px solid black",
           gap:"10px"
        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "brandStore" && (
              <Box
                 sx={{
                  "&:hover": {
                    boxShadow:'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;'
                  
                  },
                  border:"1px solid #e1e1e1",
                  marginTop:"20px",

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
`

export default HomePage;
