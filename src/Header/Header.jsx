import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import RegisterIcon from '@mui/icons-material/AppRegistration';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StoreIcon from '@mui/icons-material/Store';
import MenuIcon from '@mui/icons-material/Menu';
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; // Offer Icon
import logo from '../assets/logo.gif';

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

  const NavBarLinks = ['E-Scooter', 'E-Bicycles', 'Toys', 'Brands', 'Accessories'];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {NavBarLinks.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem button>
          {/* Offer NavLink with icon */}
          <LocalOfferIcon sx={{ marginRight: 1 }} />
          <ListItemText primary="Offer" />
        </ListItem>
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
          <IconButton
            onClick={handleCloseBanner}
            sx={{ position: 'absolute', right: 0 }} // Keep the close button on the right
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      {/* Second Layer: Search Bar and Icons */}
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px 0' }}>
        {/* Search Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', width: { xs: '70%', md: '60%' } }}>
          <InputBase
            placeholder={searchPlaceholder}
            startAdornment={<SearchIcon />}
            sx={{
              backgroundColor: '#f1f1f1',
              padding: '5px 15px',
              borderRadius: '25px',
              width: '100%',
              marginLeft: '10px',
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
            }}
          />
        </Box>

        {/* Icons with Hover Effect */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '20px' }}>
          <Button
            startIcon={<VideoCallIcon />}
            sx={{
              fontSize: '16px',
              color: 'black',
              '&:hover': {
                color: 'green',
              },
            }}
          >
            Advertise
          </Button>
          <Button
            startIcon={<RegisterIcon />}
            sx={{
              fontSize: '16px',
              color: 'black',
              '&:hover': {
                color: 'green',
              },
            }}
          >
            Buy Now
          </Button>
          <Button
            startIcon={<StoreIcon />}
            sx={{
              fontSize: '16px',
              color: 'black',
              '&:hover': {
                color: 'green',
              },
            }}
          >
            Store
          </Button>
          <Button
            startIcon={<VerifiedUserIcon />}
            sx={{
              fontSize: '16px',
              color: 'black',
              '&:hover': {
                color: 'green',
              },
            }}
          >
            Warranty
          </Button>
          <IconButton
            sx={{
              fontSize: '16px',
              color: 'black',
              '&:hover': {
                color: 'green',
              },
            }}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', md: 'none' }, color: 'black' }}
          onClick={toggleMobileMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Third Line: Logo and Nav Links */}
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
        <Box>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: '80px', // Default size for larger screens
              width: '400px',
            }}
            sx={{
              width: { xs: '150px', sm: '200px', md: '300px', lg: '600px' }, // Responsive width
              height: { xs: '40px', sm: '50px', md: '70px', lg: '80px' }, // Responsive height
            }}
          />
        </Box>

        {/* Navigation Links with Hover Effect */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '22px' }}>
          {NavBarLinks.map((link, index) => (
            <Button
              key={index}
              color="inherit"
              sx={{
                fontSize: '20px',
                fontWeight: 'semibold',
                position: 'relative',
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
          {/* Offer NavLink with Image/Icon */}
          <Button
            sx={{
              fontSize: '20px',
              color: 'green',
              fontWeight: 'bold',
              fontFamily: 'serif',
              position: 'relative',
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
            startIcon={<LocalOfferIcon />}
          >
            Offer
          </Button>
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleMobileMenu}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
