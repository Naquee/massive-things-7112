import React from 'react'
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import payment from "./assets/payment.png"
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", gap: { xs: '1rem', md: '8rem' }, margin: "auto", width: "90%", flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: { xs: 'center', md: 'stretch' } }}>
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'flex-start', fontSize: 'small' }}>
          <h2 >bigbasket</h2>
          <p>About Us</p>
          <p>In News</p>
          <p>Green bigbasket</p>
          <p>Privacy Policy</p>
          <p>Affiliate</p>
          <p>Terms and Conditions</p>
          <p>Careers At bigbasket</p>
          <p>bb Instant</p>
          <p>bb Daily</p>
          <p>bb Blog</p>
          <p>bbnow</p>

        </Box>
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'flex-start', fontSize: 'small' }}>
          <h2 >Help</h2>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>bb Wallet FAQs</p>
          <p>bb Wallet T&Cs</p>
          <p>Vendor Connect</p>
        </Box>
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'flex-start', fontSize: 'small' }} >
          <h2 >Download Our App</h2>
          <img src="https://www.bbassets.com/static/v2608/custPage/build/content/img/Google-App-store-icon.png" alt="" />
          <img src="https://www.bbassets.com/static/v2608/custPage/build/content/img/Apple-App-store-icon.png" alt="" />
        </Box>

        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'flex-start', fontSize: 'small' }} >
          <h2 >Get Social With Us</h2>
          <div style={{ display: "flex", alignItems: 'flex-start', fontSize: 'small', gap: "5px" }}>
            <span style={{ color: "#3b5998" }}><FacebookIcon /></span>
            <span style={{ color: "#db3236" }}><PinterestIcon /></span>
            <span style={{ color: "#00aced" }}><TwitterIcon /></span>
            <span style={{ color: "#517fa4" }}><InstagramIcon /></span>
          </div>
        </Box>
      </Box>

      <Box sx={{ width: { md: "100%", xs: "50%", overflow: 'hidden' } }}>
        {/* <img src={footer} alt="footer" className='heelo'/> */}
      </Box>

      {/* , flexDirection: 'column', alignItems: 'flex-start', fontSize: 'small',color:'red' */}
     <hr />
    
     <Box sx={{ display: "flex",flexDirection:"row" ,fontSize:"13px",gap:"30px", width:"80%",margin:"auto", padding:"10px"}}>
      <Box sx={{color:"#cf6c4d"}}>POPULAR CATEGORIES:</Box>
      <Box sx={{width:"80%",textAlign:"left"}}>
        Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes, Organic F&V, Namkeen, Eggs, Floor Cleaners, Other Juices, Leafy Vegetables, Frozen Veg Food, Diapers & Wipes,</Box>
     </Box>

     <Box sx={{ display: "flex",flexDirection:"row" ,fontSize:"13px",gap:"50px", width:"80%",margin:"auto",padding:"10px" }}>
      <Box sx={{color:"#cf6c4d"}}>POPULAR BRANDS:</Box>
      <Box sx={{width:"80%",textAlign:"left"}}>Amul, Nescafe , MTR, RED BULL , elite cake, Pediasure, Yummiez, Yera, Yakult, Britannia, Wow Momo, Fortune , Haldirams , Ferrero, Lays, Patanjali, McCain, kwality walls, Cadbury Dairy Milk, Pedigree,</Box>
     </Box>

     <Box sx={{ display: "flex",flexDirection:"row" ,fontSize:"13px",gap:"55px", width:"80%",margin:"auto",padding:"10px" }}>
      <Box sx={{color:"#cf6c4d"}}>CITIES WE SERVE:</Box>
      <Box sx={{width:"80%",textAlign:"left"}}>
       Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Madurai, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Nashik Business, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi, Krishna District, Bhubaneshwar-Cuttack, Guwahati, Renigunta, Hubli, Davanagere, Trichy, Amravati, Raipur, Rajkot, Gwalior, Bareilly, Allahabad, Hyderabad Rural, Bangalore Rural, Chennai Rural, Vizag Rural, Lucknow Rural, Noida Rural, Ahmedabad Rural, Bhopal Rural, Bhubaneswar Rural, Coimbatore Rural, Chandigarh Rural, Gurugram Rural, Guwahati Rural, Indore Rural, Kochi Rural, Kolkata Rural, Mumbai Rural, Mysore Rural, Nagpur Rural, Patna Rural, Pune Rural, Surat Rural, Vadodara Rural, Jaipur Rural, Ranchi, Nashik, Agra, Kozhikode, </Box>
     </Box>
     {/* , flexDirection: 'column', alignItems: 'flex-start', fontSize: 'small' */}
     <Box sx={{ display: "flex",flexDirection:"row" ,fontSize:"13px", width:"80%",margin:"auto",padding:"10px" }}>
      <Box  sx={{color:"#cf6c4d"}}>PAYMENT OPTIONS:</Box>
      <Box sx={{ width: { md: "70%", xs: "360px" } }}>
        <img src={payment} alt="footer" className='payment'/>
      </Box>
     </Box>

    </Container>

  )
}
    
const Container = styled.div`
  h2{ 
    color:#cf6c4d;
    text-transform:capitalize; 
  }

`

export default Footer