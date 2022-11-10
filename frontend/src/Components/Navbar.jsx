// import React from "react";
// import styled from "styled-components";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";


// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import SearchIcon from '@mui/icons-material/Search';


// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';

// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';




// export { default as image1 } from "assets/images/1.png";
// import { default as logo } from "./assets/logo.png"
// import { width } from "@mui/system";






// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];


// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Frouits & Vegitables',
//   'Food Grands & Masala',
//   'Backery Cakes & Daily ',
//   'Saneks & Branded Food',
//   'Beauty & hyegene',
//   'Cleaning and Household',
//   'Kitchen , Garden & Pets',
//   'Eggs , Meat & Fish',
//   'Gourmet and & World Food',
//   'Baby Care',
//   "view all"
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,

//   };
// }

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   // OfferBox------------------

//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };




//   return (
//     <NavbarContainer>
//       <AppBar position="static" sx={{ backgroundColor: 'white', color: "black" }}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href=""
//               sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               {/* LOGO */}
//               <img src={logo} alt="logo" />
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: 'center', justifyContent: 'center' }}>
//               {/* <Input>
//                 <input style={{width:"10rem"}} type="text" />
//               </Input>
//               <button sx = {{backgroundColor:'blue', color:"black"}}> <SearchIcon/> </button> */}

//               <Paper
//                 component="form"
//                 sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
//               >
//                 <IconButton sx={{ p: '10px' }} aria-label="menu">
//                   {/* <MenuIcon /> */}
//                 </IconButton>
//                 <InputBase
//                   sx={{ ml: 1, flex: 1 }}
//                   placeholder="search for products"
//                   inputProps={{ 'aria-label': 'search for products' }}
//                 />
//                 <IconButton type="button" sx={{ p: '10px', backgroundColor: "#5aa02c" }} >
//                   <SearchIcon />
//                 </IconButton>


//               </Paper>
//             </Box>


//             <Box >
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
//                   <div style={{ display: "flex", gap: "5px" }}>
//                     <div style={{ color: 'red', fontSize: "30px" }}><ShoppingBasketIcon /></div>
//                     <div style={{ fontSize: "16px" }}>My basket</div>

//                   </div>
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: "45px" }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>


//       <OfferBox sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>

//         <ShopBy>
//           <FormControl sx={{ m: 0, height: '70px', width: 400, backgroundColor: '#84c225', "& fieldset": { border: 'none' }, }}>

//             <div style={{ display: "flex", gap: "11rem" }}>
//               <div>
//                 <Select
//                   multiple
//                   displayEmpty
//                   value={personName}
//                   onChange={handleChange}
//                   input={<OutlinedInput />}
//                   renderValue={(selected) => {
//                     if (selected.length === 0) {
//                       return <p style={{ color: "white", border: "none" }}>SHOAP BY CATEGORY</p>;
//                     }

//                     return selected.join(', ');
//                   }}
//                   MenuProps={MenuProps}
//                   inputProps={{ 'aria-label': 'Without label' }}
//                 // sx={{width:800}}
//                 >
//                   <MenuItem disabled value="">
//                     <em>SHOAP BY CATEGORY</em>
//                   </MenuItem>
//                   {names.map((name) => (
//                     <MenuItem
//                       key={name}
//                       value={name}
//                       style={getStyles(name, personName, theme)}

//                     >
//                       {name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </div>
//               <div >
//                 <button style={{ width: '150%', height: 69, backgroundColor: "white" }}>OFFERS</button>
//               </div>
//             </div>

//           </FormControl>
//         </ShopBy>



//       </OfferBox>
//     </NavbarContainer>


//   );
// };

// const NavbarContainer = styled.div`

// `;


// const OfferBox = styled.div`
// width:100%;
// height: 69px ;
// border : 1px solid #cccccc;

// `

// const ShopBy = styled.div`
// float:left;
// border:"none";

// `

// export default Navbar;

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import stylesc from "styled-components"
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import logo from "./assets/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Paper } from '@mui/material';


const pages = ['Gifts', 'New', 'Women', 'Men', 'Kids', 'Cashmere', 'Home', 'Stories', 'Sale'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {

  // Drawer
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const [menu, setMenu] = useState("list");

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, mt: '15px' }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Button size="large" href="https://www.google.com" sx={{ ml: 10 }}>SignIN</Button>
      <List>
        {['Fruits & Vegetables', 'Foodgrains, Oil & Masala', 'Women', 'Men', 'Kids', 'Cashmere', 'Home', 'Stories', 'Sale'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={() => setMenu(text)}>
            <ListItemButton>
              <ListItemText primary={text} />
              <BiChevronRight />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  //   Drawer Ends Here

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //     setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //     setAnchorElNav(null);
  // };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Sub Menus

  const fruitandvegetables = (
    <MenuContainer>
      <List sx={{ mt: 5, width: '250px' }} >
        <Divider />
        <Typography textAlign="center" padding="10px">{menu}</Typography>
        <Divider />
        {[{ title: 'Fresh Vegetables', path: '/freshvegetables' },
        { title: 'Cashmere', path: '/cashmere' },
        { title: 'For Men', path: '/formen' },
        { title: 'Cashmere', path: '/cashmere' },
        ].map((ele, index) => (
          <Link to={ele.path} >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={ele.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </MenuContainer>
  )

  const foodgrains = (
    <MenuContainer>
      <List sx={{ mt: 5, width: '250px' }} >
        <Divider />
        <Typography textAlign="center" padding="10px">{menu}</Typography>
        <Divider />
        {[{ title: 'Fresh Vegetables', path: '/freshvegetables' },
        { title: 'Cashmere', path: '/cashmere' },
        { title: 'For Men', path: '/formen' },
        { title: 'Cashmere', path: '/cashmere' },
        ].map((ele, index) => (
          <Link to={ele.path} >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={ele.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </MenuContainer>
  )

  const gift = (
    <MenuContainer>
      <List sx={{ mt: 5, width: '250px' }} >
        <Divider />
        <Typography textAlign="center" padding="10px">{menu}</Typography>
        <Divider />
        {[{ title: 'For Men', path: '/formen' },
        { title: 'Cashmere', path: '/cashmere' },
        { title: 'For Men', path: '/formen' },
        { title: 'Cashmere', path: '/cashmere' },
        ].map((ele, index) => (
          <Link to={ele.path} >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={ele.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </MenuContainer>
  )

  return (
    <NavbarContainer>
      <AppBar elevation={0} position="static" sx={{ borderBottom: "1px solid #ddd", backgroundColor: "white", color: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="img"
              sx={{
                display: { xs: 'none', md: 'flex' },
                m: 0,
                p: 0,
                mr: 1,
                height: 120,
                width: 130,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src={logo}
            />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer("left", true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                sx={{ position: 'relative' }}
                anchor={"left"}
                open={state["left"]}
              >
                <VscChromeClose style={{ position: "absolute", top: menu === 'list' ? '25' : '18', left: "25", fontSize: "large" }} onClick={toggleDrawer("left", false)} />

                {menu !== "list" && <BiChevronLeft style={{ zIndex: 13000, position: "absolute", top: "62px", left: "25", fontSize: "large" }} onClick={() => setMenu("list")} />}


                <div className="menuList">
                  {menu === "list" && list("left")}
                  {menu === "Gifts" && gift}
                  {menu === "Fruits & Vegetables" && fruitandvegetables}
                  {menu === "Foodgrains, Oil & Masala" && foodgrains}
                  
                </div>
              </Drawer>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={toggleDrawer("left", false)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page}
                    onClick={toggleDrawer("left", false)}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              component="img"
              sx={{
                display: { xs: 'flex', md: 'none' }, mr: 1,
                height: 120,
                width: 130,
              }}
              alt="The house from the offer."
              src={logo}
            />

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: 'center', justifyContent: 'center' }}>


              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
              >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search For Products"
                />
                <IconButton type="button" sx={{
                  p: '10px', color: '#cf6c4d', '&:hover': {
                    backgroundColor: "#cf6c4d",
                    color:"white"
                  }
                }} >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box>

            <Box sx={{ flexGrow: 0, mr: '5px', display: { lg: 'flex' } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ padding: '0px 8px' }}>
                  <p className="signIn">SignIn</p>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '50px', mr: '0px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
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

            <Box sx={{ display: { xs: 'none', lg: 'flex', md: 'flex' }, mr: 1, }}
              marginLeft="20px"
              display="flex"
              alignItems="center"
              height="30px"
              fontSize="25px">
              <HiOutlineShoppingBag fontSize={'xxx-large'} color={'#cf6c4d'} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </NavbarContainer >
  );
}

export default Navbar

const NavbarContainer = stylesc.div`
width:100%;
    color:black; 
    .searchText{
        height:90%;
        border:none;
        pointerEvents:none;
        outline:none;
    }

    .menuList{
        width:80%;
        display:flex;
        justify-content:space-between;
    }
    .signIn{
        font-size:18px;
        font-weight:500;

    }
`;

const MenuContainer = stylesc.div`
    a{
        text-decoration:none;
        color:black;
    }
`;






