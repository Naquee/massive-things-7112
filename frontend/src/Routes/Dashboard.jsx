import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styledComp from 'styled-components'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { saveData } from '../Utils/appLocalStorage';
import UserInfo from '../Components/UserInfo';
import AddProducts from '../Components/AddProducts';
import AllProductsData from '../Components/AllProductsData';
import { dashUserData, userSignout } from '../Redux/Auth/action';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const colorScheme = {
    primaryColor: '#cf6c4d',
    secondaryColor: 'white'
}

const Dashboard = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const { users, isAdmin, token} = useSelector((store) => (store.AuthReducer));
    const [type, setType] = useState('Company Information');
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSignout = () => {
        dispatch(userSignout())
        navigate("/", { replace: true })
    }

    const getUserData = () => {
        const payload = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        dispatch(dashUserData(payload)).then((res) => {
            if (!res.payload.status) {
                navigate("/", { replace: true });
            }
        }).catch((err) => {
            console.log(err);
        });
    }


    useEffect(() => {
        getUserData();
    }, []);

    return (
        isAdmin &&
        <Container users={users}>
            <Box sx={{ display: 'flex', }} >
                <CssBaseline />
                <AppBar position="fixed" open={open} >
                    <Toolbar style={{ backgroundColor: '#cf6c4d' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div style={{ display: 'flex', alignItems: "center", gap: '10px', cursor: 'pointer', textDecoration: 'none', color: 'white' }}>
                            <a style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: "center" }} href="/"><HomeIcon /></a>
                            <Typography variant="h6" noWrap component="div">
                                Dashboard
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {[{ text: 'Users' }, { text: 'Products' }].map((ele, index) => (
                            <ListItem key={ele.text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    style={{ position: "relative" }}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => setType(ele.text)}
                                >
                                    {ele.text === "Users" && users?.length > 0 && <span className={open ? 'openFloat' : "closeFloat"}>{users?.length}</span>}
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {<>
                                            <InboxIcon />
                                        </>}
                                    </ListItemIcon>
                                    <ListItemText primary={ele.text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Add User', 'Add Products', 'Edit Products'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={() => setType(text)}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <List className={'signOutBox'}>
                        {['Sign Out'].map((text, index) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                    onClick={handleSignout}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 2 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {<LogoutIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, pt: 3 }} className="leftDataBox">
                    <DrawerHeader />
                    {type === 'Users' && <UserInfo colorScheme={colorScheme} />}
                    {type === 'Add Products' && <AddProducts colorScheme={colorScheme} />}
                    {type === 'Products' && <AllProductsData colorScheme={colorScheme} />}
                </Box>
            </Box>
        </Container>
    )
}
const Container = styledComp.div`
    
    .openFloat{
        width: ${props => props.users?.length > 10 ? '25px' : "20px"};
        height: 20px;
        background-color: #e5322d;
        color: white;
        border-radius: 50%;
        position: absolute;
        top: 5%;
        left: 14%;
        text-align: center;
        font-size: 10px;
        font-weight: bold;
        display:flex;
        align-items:center;
        justify-content:Center;
    }

    .closeFloat{
        width: ${props => props.users?.length > 9 ? '25px' : "20px"};
        height: 20px;
        background-color: #e5322d;
        color: white;
        border-radius: 50%;
        position: absolute;
        top: 5%;
        left: 50%;
        text-align: center;
        font-size: 10px;
        font-weight: bold;
        display:flex;
        align-items:center;
        justify-content:Center;
    }

    .leftDataBox{
        bacground-color:white;
    }

    .signOutBox{
        margin-top:25vh;
    }
`

export default Dashboard