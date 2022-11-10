import React from 'react'
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import footer from "./assets/footer.png"

const Footer = () => {
  return (
    <>
    <div style={{display:"flex",gap:"10rem",margin:"auto",width:"80%"}}>
    <Box>
    <p style={{color:"#84c225"}}>bigbasket</p>
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
    <Box>
    <p style={{color:"#84c225"}}>Help</p>
    <p>FAQs</p>
    <p>Contact Us</p>
    <p>bb Wallet FAQs</p>
    <p>bb Wallet T&Cs</p>
    <p>Vendor Connect</p>
    </Box>
    <Box>
    <p style={{color:"#84c225"}}>Download Our App</p>
    <img src="https://www.bbassets.com/static/v2608/custPage/build/content/img/Google-App-store-icon.png" alt="" />
    <img src="https://www.bbassets.com/static/v2608/custPage/build/content/img/Apple-App-store-icon.png" alt="" />
    </Box>

    <Box>
    <p style={{color:"#84c225"}}>Get Social With Us</p>
   <div style={{gap:"20px",width: "300px"}}>
   <span style={{color:"#3b5998"}}><FacebookIcon/></span>
    <span style={{color:"#db3236"}}><PinterestIcon/></span>
    <span style={{color:"#00aced"}}><TwitterIcon/></span>
    <span style={{color:"#517fa4"}}><InstagramIcon/></span>
   </div>
    </Box>
    </div>

    <img src={footer} alt="footer" />
    </>

  )
}

export default Footer