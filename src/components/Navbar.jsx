import React, { useState, useEffect, useRef } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography,
    styled,
    ListItemButton,
    ListItemText,
    Popper,
    Paper,
    Grow,
    MenuList,
    MenuItem,
    Button,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import logo from '../img/kamounilogo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import DrawerItem from './DrawerItem';

// Styled components
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const ResponsiveButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(0.5),
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.7rem',
        padding: '4px 8px',
    },
}));

const DropdownButton = styled(ListItemButton)(({ theme }) => ({
    color: '#1e2a5a',
    "&:hover": {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
    },
    "& .MuiSvgIcon-root": {
        transition: 'transform 0.3s ease',
    },
    "&:hover .MuiSvgIcon-root": {
        transform: 'rotate(180deg)',
    },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const timeoutRef = useRef();

    useEffect(() => {
        const role = localStorage.getItem('role');
        setUserRole(role);
    }, []);

    const handleOpen = (event) => {
        clearTimeout(timeoutRef.current);
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        timeoutRef.current = setTimeout(() => {
            setOpen(false);
        }, 100);
    };

    const handleCloseImmediate = () => {
        setOpen(false);
    };

 

    const navItems = [
        { text: "Accueil", link: "/" },
        { text: "Qui sommes nous", link: "/about" },
        { text: "Services", submenu: true },
        { text: "Contact us", link: "/Contact" },
     ];

    

    const renderNavItems = () => {
        return navItems.map((item) => (
            <ListItem key={item.text}  sx={{ width: 'auto' }}>
                {item.submenu ? (
                    <Box
                        onMouseEnter={handleOpen}
                        onMouseLeave={handleClose}
                    >
                        <DropdownButton
                            sx={{
                                padding: '8px 16px',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center',fontFamily:"cursive"} }>
                              <span style={{fontFamily:"cursive"}}> {item.text}</span> 
                                <ArrowDropDownIcon sx={{ marginLeft: 1 }} />
                            </Box>
                        </DropdownButton>
                        <Popper
                            open={open}
                            anchorEl={anchorEl}
                            role={undefined}
                            transition
                            disablePortal
                            onMouseEnter={() => clearTimeout(timeoutRef.current)}
                            onMouseLeave={handleCloseImmediate}
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom' ? 'center top' : 'center bottom',
                                    }}
                                >
                                    <Paper>
                                        <MenuList autoFocusItem={open} id="menu-list-grow">
                                            <MenuItem component={Link} to="/fiscale" onClick={handleCloseImmediate} style={{fontFamily:"cursive"}}>Comptable et fiscale</MenuItem>
                                            <MenuItem component={Link} to="/paie-conseil-social" onClick={handleCloseImmediate} style={{fontFamily:"cursive"}}>Paie et conseil social</MenuItem>
                                            <MenuItem component={Link} to="/conseil-gestion" onClick={handleCloseImmediate} style={{fontFamily:"cursive"}}>Conseil en gestion</MenuItem>
                                            <MenuItem component={Link} to="/audit" onClick={handleCloseImmediate} style={{fontFamily:"cursive"}}>Audit</MenuItem>
                                            
                                        </MenuList>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </Box>
                ) : (
                    <ListItemButton
                        component={item.link ? Link : 'button'}
                        to={item.link}
                        onClick={item.onClick}
                        sx={{
                            color: '#1e2a5a',
                            "&:hover": {
                                backgroundColor: 'transparent',
                                color: theme.palette.primary.main,
                            },
                            whiteSpace: 'nowrap',
                            padding: '4px 8px',
                        }}
                    >
                        {item.highlight ? (
                            <ResponsiveButton
                                variant="contained"
                                color="primary"
                                sx={{
                                    backgroundColor: '#546e7a',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#455a64',
                                    },
                                }}
                            >
                              <span style={{fontFamily:"cursive"}} >{item.text}</span>  
                            </ResponsiveButton>
                        ) : (
                            <ListItemText primary={item.text} style={{fontFamily:"cursive"}} />
                        )}
                    </ListItemButton>
                )}
            </ListItem>
        ));
    };

    return (
        <AppBar 
            component="nav" 
            position="sticky"
            sx={{ 
                backgroundColor: 'white', 
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
            }}
        >
            <StyledToolbar>
                <Typography variant="h6" component="h2">
                    <img 
                        src={logo}
                        alt="Conseil"
                        style={{ 
                            height: '100px', 
                            cursor: 'pointer', 
                            maxWidth: '100%', 
                            objectFit: 'contain',
                        }} 
                        onClick={() => window.location.href = '/'}
                    />
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <ListMenu>
                        {renderNavItems()}
                    </ListMenu>
                </Box>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <DrawerItem userRole={userRole} /> 
                </Box>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;