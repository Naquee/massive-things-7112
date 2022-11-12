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

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,max-content))",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          overflow:"hidden"

        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "neupass" && (
              <Box>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height='60px'
                />
              </Box>
            )
        )}
      </Box>

      <Box sx={{fontSize:"25px",width:"90%",paddingTop:"50px",color:"#444444"}}>Bank Offers</Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,max-content))",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          overflow:"hidden"

        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "banks" && (
              <Box sx={{hovar:"white"}}>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='300px'
                  height='200px'
                  // box-shadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
                />
              </Box>
            )
        )}
      </Box>

      <Box>Best Sellers</Box>
      <Box>
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
      >
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg" alt="" /></SwiperSlide>

        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg" alt="" /></SwiperSlide>
     
      </Swiper>

      </Box>








      <Box>Top Offers</Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,max-content))",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          overflow:"hidden"

        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "dealsWeek" && (
              <Box>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height='60px'
                />
              </Box>
            )
        )}
      </Box>

      <Box>Fruits & Vegetables</Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,max-content))",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          overflow:"hidden"

        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "fruitsSabji" && (
              <Box>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height='60px'
                />
              </Box>
            )
        )}
      </Box>

      <Box>Your Daily Staples</Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,max-content))",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          overflow:"hidden"

        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "DailyStaples" && (
              <Box>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height='60px'
                />
              </Box>
            )
        )}
      </Box>

      <Box>Beverages</Box>
      <Box
       sx={{
          display: "flex",
          justifyContent: "center",
          
          gap: "10px",
          marginTop: "30px",
          overflow:"hidden"

        }}
      >
      <Box>
       {products?.map(
          (ele, index) =>
            ele.name === "bgiLeft1" && (
              <Box>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height='60px'
                />
              </Box>
            )
        )}
       </Box>

       
       <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,max-content))",
          justifyContent: "center",
          gap: "10px",
          overflow:"hidden"

        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "smallRight1" && (
              <Box>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height='60px'
                />
              </Box>
            )
        )}
      </Box>
        </Box>



        <Box>Snack Store</Box>
        <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,max-content))",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          overflow:"hidden"

        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "snackStore" && (
              <Box>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height='60px'
                />
              </Box>
            )
        )}
      </Box>





        <Box>Cleaning & Household</Box>
        <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,max-content))",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          overflow:"hidden"

        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "household" && (
              <Box>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height='60px'
                />
              </Box>
            )
        )}
      </Box>


      <Box>Beauty & Hygiene</Box>
      <Box
       sx={{
          display: "flex",
          justifyContent: "center",
          
          gap: "10px",
          marginTop: "30px",
          overflow:"hidden"

        }}
      >
      <Box>
       {products?.map(
          (ele, index) =>
            ele.name === "bgiLeft1" && (
              <Box>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height='60px'
                />
              </Box>
            )
        )}
       </Box>

       
       <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,max-content))",
          justifyContent: "center",
          gap: "10px",
          overflow:"hidden"

        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "smallRight2" && (
              <Box>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height='60px'
                />
              </Box>
            )
        )}
      </Box>
        </Box>


        <Box>Home & Kitchen Essentials</Box>
        <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,max-content))",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          overflow:"hidden"

        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "KitchenEssentials" && (
              <Box>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height='60px'
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


      <Box>Brand Store</Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,max-content))",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          overflow:"hidden"

        }}
      >
        {products?.map(
          (ele, index) =>
            ele.name === "brandStore" && (
              <Box>
                <img
                  src={`${REACT_APP_API_URL}${ele.img_path}`}
                  alt={ele.name}
                  width='160px'
                  height='60px'
                />
              </Box>
            )
        )}
      </Box>




    






      












     
    </>
  );
};

export default HomePage;
