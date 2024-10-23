import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import RegisterIcon from '@mui/icons-material/AppRegistration';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StoreIcon from '@mui/icons-material/Store';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo1.gif';

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [searchPlaceholder, setSearchPlaceholder] = useState("Search for 'E-Scooter'");
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile menu state

  const placeholders = ["Search for 'E-Scooter'", "Search for 'Bicycles'", "Search for 'Accessories'"];

  // Function to cycle through placeholders
  useEffect(() => {
    const interval = setInterval(() => {
      setSearchPlaceholder((prev) => {
        const currentIndex = placeholders.indexOf(prev);
        const nextIndex = (currentIndex + 1) % placeholders.length;
        return placeholders[nextIndex];
      });
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [placeholders]);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen); // Toggle mobile menu
  };

  const NavBarLinks = ['E-Scooter', 'E-Bicycles',  'Rental','Toys', 'Accessories'];

  const drawer = (
    <Box sx={{ width: 250 }}> {/* Reduced width for mobile drawer */}
      <List>
        {NavBarLinks.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
      {/* Banner */}
      {showBanner && (
        <Box
          sx={{
            backgroundColor: 'yellow',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px 10px',
            position: 'relative',
          }}
        >
          <Typography sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontSize: '16px' }}>
            Grand Festive Sale is live!
          </Typography>
          <IconButton onClick={handleCloseBanner} sx={{ position: 'absolute', right: 0 }}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      {/* Logo and Search Bar */}
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0' }}>
        <Box>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: 'auto', // Maintain aspect ratio
              width: '100%', // Full width for responsiveness
              maxWidth: '300px', // Set max width for larger screens
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: { xs: '40%', sm: '50%', md: '40%', lg: '20%' }, // Adjust width based on screen size
            marginLeft: { xs: '0', sm: '0', md: '80px' },
          }}
        >
          <InputBase
            placeholder={searchPlaceholder}
            startAdornment={<SearchIcon />}
            sx={{
              backgroundColor: '#f1f1f1',
              padding: '5px 10px', // Adjust padding for smaller size
              borderRadius: '25px',
              width: '100%', // Full width
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
            }}
          />
        </Box>

        {/* Navigation Links with Hover Effect */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '18px' }}>
          {NavBarLinks.map((link, index) => (
            <Button
              key={index}
              color="inherit"
              sx={{
                fontSize: '15px',
                textTransform: 'none',
                position: 'relative',
                fontWeight: '500',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  width: '0%',
                  height: '2px',
                  bottom: 0,
                  left: '50%',
                  backgroundColor: 'green',
                  transition: 'width 0.3s ease, left 0.3s ease',
                },
                '&:hover::before': {
                  width: '100%',
                  left: 0,
                },
              }}
            >
              {link}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', md: 'none' }, color: 'black' ,gap: { xs: '4px', md: '0px' } }}
          onClick={toggleMobileMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleMobileMenu}>
        <Box sx={{ width: 250 }}> {/* Adjust width for mobile drawer */}
          <List>
            {NavBarLinks.map((text) => (
              <ListItem button key={text} sx={{ padding: '10px' }}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
