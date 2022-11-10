import React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";


import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from '@mui/icons-material/Search';


import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';




// export { default as image1 } from "assets/images/1.png";
import {default as logo } from "./assets/logo.png"
import { width } from "@mui/system";






const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Frouits & Vegitables',
  'Food Grands & Masala',
  'Backery Cakes & Daily ',
  'Saneks & Branded Food',
  'Beauty & hyegene',
  'Cleaning and Household',
  'Kitchen , Garden & Pets',
  'Eggs , Meat & Fish',
  'Gourmet and & World Food',
  'Baby Care',
  "view all"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
        
  };
}

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // OfferBox------------------

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };




  return (
    <NavbarContainer>
      <AppBar position="static" sx = {{backgroundColor:'white', color:"black"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {/* LOGO */}
              <img src={logo} alt="logo" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems:'center', justifyContent:'center' }}>
              {/* <Input>
                <input style={{width:"10rem"}} type="text" />
              </Input>
              <button sx = {{backgroundColor:'blue', color:"black"}}> <SearchIcon/> </button> */}

              <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        {/* <MenuIcon /> */}
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search for products"
        inputProps={{ 'aria-label': 'search for products' }}
      />
      <IconButton type="button" sx={{ p: '10px' ,backgroundColor:"#5aa02c"}} >
        <SearchIcon />
      </IconButton>
   
     
    </Paper>
            </Box>


            <Box >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  <div style={{display:"flex",gap:"5px"}}>
                    <div style={{color:'red' , fontSize:"30px"}}><ShoppingBasketIcon/></div>
                    <div style={{fontSize:"16px"}}>My basket</div>
                
                  </div>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>


      <OfferBox sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>

      <ShopBy>
      <FormControl sx={{m:0, height:'70px', width: 400, backgroundColor:'#84c225', "& fieldset": { border: 'none' },} }>
    
   <div style={{display:"flex", gap:"11rem"}}>
   <div>
      <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return  <p style={{color:"white",border:"none"}}>SHOAP BY CATEGORY</p>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          // sx={{width:800}}
        >
          <MenuItem disabled value="">
            <em>SHOAP BY CATEGORY</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
              
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div >
        <button style = {{width:'150%', height: 69,backgroundColor:"white"}}>OFFERS</button>
      </div>
   </div>
     
      </FormControl>
    </ShopBy>
      
    
      
      </OfferBox>
    </NavbarContainer>

   
  );
};

const NavbarContainer = styled.div`

`;


const OfferBox = styled.div`
width:100%;
height: 69px ;
border : 1px solid #cccccc;

`

const ShopBy = styled.div`
float:left;
border:"none";

`

export default Navbar;






