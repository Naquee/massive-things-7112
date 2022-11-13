import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import stylesc from "styled-components"
import { HiOutlineShoppingBag } from "react-icons/hi";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { Link, useNavigate } from 'react-router-dom';
import logo from "./assets/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Paper, Tooltip } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fade from '@mui/material/Fade';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Login from '../Routes/Login';
import { useDispatch, useSelector } from 'react-redux';
import { userSignout } from '../Redux/Auth/action';
import { getCartProduct } from '../Redux/App/action';

const pages = ['Gifts', 'New', 'Women', 'Men', 'Kids', 'Cashmere', 'Home', 'Stories', 'Sale'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const aalu = [
  {
    id: 1,
    title: "Potato, Onion & Tomato",
    path: "/fruitsandvegetables"
  },
  {
    id: 2,
    title: "Cucumber & Capsicum",
    path: "/fruitsandvegetables"
  },
  {
    id: 3,
    title: "Leafy Vegetables",
    path: "/fruitsandvegetables"
  },
  {
    id: 4,
    title: "Root Vegetables",
    path: "/fruitsandvegetables"
  },
  {
    id: 5,
    title: "Beans, Brinjals & Okra",
    path: "/fruitsandvegetables"
  },
  {
    id: 6,
    title: "Potato, Onion & Tomato",
    path: "/fruitsandvegetables"
  },
  {
    id: 7,
    title: "Cabbage & Cauliflower",
    path: "/fruitsandvegetables"
  },
  {
    id: 8,
    title: "Gourd, Pumpkin, Drumstick",
    path: "/fruitsandvegetables"
  },
  {
    id: 9,
    title: "Specialty",
    path: "/specialty"
  },

]

const fresh = [
  {
    id: 1,
    title: "Herbs & Seasonings",
    path: "/fruitsandvegetables"
  },
  {
    id: 2,
    title: "Fresh Fruits",
    path: "/fruitsandvegetables"
  },
  {
    id: 3,
    title: "Organic Fruits & Vegitables",
    path: "/fruitsandvegetables"
  },
  {
    id: 4,
    title: "Veg",
    path: "/fruitsandvegetables"
  },
  {
    id: 1,
    title: "Cuts & Sprouts",
    path: "/fruitsandvegetables"
  },
  {
    id: 2,
    title: "Exotic Fruits & Veggies",
    path: "/fruitsandvegetables"
  },
  {
    id: 3,
    title: "Vegetables",
    path: "/fruitsandvegetables"
  },
  {
    id: 4,
    title: "Flower Bouquets Buncheses",
    path: "/fruitsandvegetables"
  },
]





const serach = [
  {
    id: 1,
    title: "Popular Searches",
    path: "/fruitsandvegetables"
  },
  {
    id: 2,
    title: "Ash Gourd",
    path: "/fruitsandvegetables"
  },
  {
    id: 3,
    title: "Vegetables",
    path: "/fruitsandvegetables"
  },
  {
    id: 4,
    title: "Veg",
    path: "/fruitsandvegetables"
  },

]
const phal = [
  {
    id: 1,
    title: "Fruits & Vegetables",
    path: "/fruitsandvegetables"
  },
  {
    id: 2,
    title: "Foodgrains,Oil & Masala",
    path: "/fruitsandvegetables"
  },
  {
    id: 3,
    title: "Bakery Cakes & Dairy",
    path: "/backerycakes"
  },
  {
    id: 4,
    title: "Beverages",
    path: "/beverages"
  },
  {
    id: 5,
    title: "Snacks & Branded Food",
    path: "/bevrages"
  },
  {
    id: 6,
    title: "Beauty & hygine",
    path: "/fruitsandvegetables"
  },

  {
    id: 7,
    title: "Cleaning and Household",
    path: "/fruitsandvegetables"
  },
  {
    id: 8,
    title: "Kitchen , Garden & Pets",
    path: "/fruitsandvegetables"
  },
  {
    id: 9,
    title: "Eggs, Meat & Fish",
    path: "/fruitsandvegetables"
  },
  {
    id: 10,
    title: "Gourmet and & World Food",
    path: "/fruitsandvegetables"
  },
  {
    id: 11,
    title: "Baby Care",
    path: "/fruitsandvegetables"
  }


]


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
      <Button size="large" sx={{ ml: 10 }}></Button>
      <List>
        {['Fruits & Vegetables', 'Fresh Vegitables', 'Popular Search'].map((text, index) => (
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
      <List sx={{ mt: 5, width: '250px' }}>
        <Divider />
        <Typography textAlign="center" padding="10px" fontSize='small' fontWeight={'bold'} color='#cf6c4d'>{menu}</Typography>
        <Divider />
        {[{ title: 'Fruits & Vegetables', path: '/fruitsvegetables' },
        { title: 'Food Grands & Masala', path: '/foodgrand' },
        { title: 'Backery Cakes & Daily', path: '/backerycake' },
        { title: 'Saneks & Branded Food', path: '/sneksbranded' },
        { title: 'Beauty & hyegene', path: '/beauty' },
        { title: 'Cleaning and Household', path: '/cleaning' },
        { title: 'Kitchen , Garden & Pets', path: '/kitchen' },
        { title: 'Eggs , Meat & Fish', path: '/eggs' },
        { title: 'Gourmet and & World Food', path: '/gourmet' },
        { title: 'Baby Care', path: '/baby' },

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

  const FreshVegitables = (
    <MenuContainer>
      <List sx={{ mt: 5, width: '250px' }} >
        <Divider />
        <Typography textAlign="center" padding="10px" fontSize='small' fontWeight={'bold'} color='#cf6c4d'>{menu}</Typography>
        <Divider />
        {[{ title: 'Fresh Vegitables', path: '/freshvegetables' },
        { title: 'Herbs & Seasioning', path: '/herbs' },
        { title: 'Fresh Fruits', path: '/formen' },
        { title: 'Organic Fruits nad Vegitables', path: '/organicfrouts' },
        { title: 'Ecxotic Frouits', path: '/exotic' },
        { title: 'Flower Bouquets Buncheses', path: '/flower' },

        ].map((ele, index) => (
          <Link to={ele.path} >
            <ListItem key={index} disablePadding >
              <ListItemButton>
                <ListItemText primary={ele.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </MenuContainer>
  )

  const popular = (
    <MenuContainer>
      <List sx={{ mt: 5, width: '280px' }} >
        <Divider />
        <Typography textAlign="center" padding="10px" fontSize='small' fontWeight={'bold'} color='#cf6c4d'>{menu}</Typography>
        <Divider />
        {[{ title: 'Ash Grand', path: '/ashgrand' },
        { title: 'Vegitables', path: '/vegitables' },
        { title: 'Veg', path: '/veg' },

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


  //Category Box
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  //Authentication
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, isAdmin } = useSelector((store) => (store.AuthReducer));
  const handleSignout = () => {
    dispatch(userSignout())
  }

  const { token } = useSelector((store) => (store.AuthReducer));
  const { cart } = useSelector((store) => (store.AppReducer));
  const getCartData = () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    dispatch(getCartProduct(headers)).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  console.log(cart)

  useEffect(() => {
    if (isAuth) {
      handleCloseUserMenu()
      getCartData()
    } 
  }, [isAuth])

  return (
    <NavbarContainer>
      <AppBar elevation={0} position="static" sx={{ width: '100%', borderBottom: "1px solid #ddd", backgroundColor: "white", color: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to='/'>
              <Box
                component="img"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  m: 0,
                  p: 0,
                  mr: 1,
                  height: 80,
                  width: 120,
                }}
                alt="The house from the offer."
                src={logo}
              />
            </Link>

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
                sx={{ position: 'relative', cursor: 'pointer' }}
                anchor={"left"}
                open={state["left"]}

              >
                <VscChromeClose style={{ position: "absolute", top: menu === 'list' ? '25' : '18', left: "25", fontSize: "large" }} onClick={toggleDrawer("left", false)} />

                {menu !== "list" && <BiChevronLeft style={{ zIndex: 13000, position: "absolute", top: "60px", left: "25", fontSize: "large" }} onClick={() => setMenu("list")} />}


                <div className="menuList">
                  {menu === "list" && list("left")}
                  {menu === "Fruits & Vegetables" && fruitandvegetables}
                  {menu === "Fresh Vegitables" && FreshVegitables}
                  {menu === "Popular Search" && popular}

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
            <Link to='/'>
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
            </Link>

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
                    color: "white"
                  }
                }} >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box>
            <Box sx={{ mt: '4px' }}>
              <Login isAuth={isAuth} />
            </Box>

            {isAuth && <Box sx={{ flexGrow: 0, mr: '5px', display: { lg: 'flex' } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ padding: '0px 8px' }}>
                  <img src='https://img.icons8.com/clouds/100/null/user.png' alt="" width='60px' height='60px' />
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
                {isAdmin && <Link to={'/admin/dashboard'}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" >Dashboard</Typography>
                  </MenuItem>
                </Link>}

                <MenuItem onClick={handleSignout}>
                  <Typography textAlign="center" >Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>}

            <Box sx={{ display: { xs: 'none', lg: 'flex', md: 'flex' }, mr: 1, position: 'relative' }}
              marginLeft="20px"
              display="flex"
              alignItems="center"
              height="30px"
              fontSize="25px">
              <Link to='/cart'>
                <HiOutlineShoppingBag fontSize={'40px'} color={'#cf6c4d'} />
                <span style={{ position: 'absolute', left: cart?.length > 9 ? "34%" : "43%", fontSize: '11px', top: '27%', fontWeight: 'bold' }}>{cart?.length !== 0 || cart === undefined ? cart?.length : 0}</span>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', display: { xs: 'none', md: 'flex' }, alignItems: 'center', padding: '0px 50px' }}>
        <Box>
          <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onMouseOver={handleClick}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: "10px", padding: '10px 15px', backgroundColor: '#cf6c4d', color: 'white' }}>Shop By Category<KeyboardArrowDownIcon /></span>
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            sx={{ ml: 1 }}
          >
            <Box sx={{ ml: 1, display: 'flex' }} >
              <Box>
                {phal.map((el, index) => (
                  <Link to={el.path} >
                    <ListItem key={index} onClick={()=> handleClose()} disablePadding >
                      <ListItemButton>
                        <ListItemText sx={{ color: "black", root: { textDecoration: 'none', }, }}
                          primary={el.title} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </Box>
              <Box>
                {
                  fresh.map((el, index) => (
                    <Link to={el.path} >
                      <ListItem key={index} onClick={()=> handleClose()} disablePadding>
                        <ListItemButton>
                          <ListItemText sx={{ padding: "-10px", color: "black", root: { textDecoration: 'none', }, }}
                            primary={el.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
              </Box>
              <Box>
                {
                  aalu.map((el, index) => (
                    <Link to={el.path} >
                      <ListItem key={index} onClick={()=> handleClose()} disablePadding>
                        <ListItemButton>
                          <ListItemText sx={{ padding: "-10px", color: "black", root: { textDecoration: 'none', }, }}
                            primary={el.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
              </Box>

              <Box>
                {
                  serach.map((el, index) => (
                    <Link to={el.path} >
                      <ListItem key={index} onClick={()=> handleClose()} disablePadding>
                        <ListItemButton>
                          <ListItemText sx={{ padding: "-10px", color: "black", root: { textDecoration: 'none', }, }}
                            primary={el.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
              </Box>
            </Box>
          </Menu>
        </Box>
        <Box>
          <span style={{ display: 'flex', alignItems: 'center', gap: "10px", padding: '10px 15px', backgroundColor: '#cf6c4d', color: 'white' }}><LocalOfferIcon /> OFFERS</span>
        </Box>
      </Box>
    </NavbarContainer>
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
    .cate{
      color:black;
    }
`;

const MenuContainer = stylesc.div`
    a{
        text-decoration:none;
        color:black;
    }
`;






