import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import logo from '../assets/logo2.png';


const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#d4edda', // Light green background color
        color: 'black',             // Text color black
        padding: { xs: '20px 10px', md: '40px 20px' }, // Padding adjusts for small/large screens
        fontFamily: 'Rubik, Arial, serif',
        fontSize: '18px',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Responsive Logo Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' }, marginBottom: { xs: '20px', md: '0' } }}>
            {/* Image for the logo */}
            <img 
              src={logo} 
              alt="91 Logo" 
              style={{ width: '350px', height: 'auto', marginBottom: '10px' }} 
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px', color: 'green',fontFamily:'serif',fontSize:'25px' }}>
              EXER MOBILITY
            </Typography>
            <Typography variant="body2" sx={{fontSize:'20px'}}>Electric Revolution</Typography>
          </Box>
        </Grid>

        {/* Bicycle Categories */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '23px', textAlign: { xs: 'center', md: 'left' } }}>
           Vehicle Categories
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px',fontSize:'18px', alignItems: { xs: 'center', md: 'start' } }}>
            <Link href="#" underline="hover" color="inherit">
              Active Series
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Speed Series
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Cargo Series
            </Link>
            <Link href="#" underline="hover" color="inherit">
             E-Bicycle
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Toys
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Accessories
            </Link>
          </Box>
        </Grid>

        {/* Bicycle Types */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '23px', textAlign: { xs: 'center', md: 'left' } }}>
            Important pages
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px',fontSize:'18px', alignItems: { xs: 'center', md: 'start' } }}>
            <Link href="#" underline="hover" color="inherit">
              E-Scooter
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Rental Services
            </Link>
            <Link href="#" underline="hover" color="inherit">
            E-Bicycle
            </Link>
            
          </Box>
        </Grid>

        {/* More Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '23px', textAlign: { xs: 'center', md: 'left' } }}>
            Contact Details
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px',fontSize:'18px', alignItems: { xs: 'center', md: 'start' } }}>
            <Link href="#" underline="hover" color="inherit">
             Mobile<br/> +91 8956301541/42
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Mail Id- sales@exerenergy.com
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Address<br/> Exerval Private Limited, Exer Energy, GAT No – 309/3, Opposite to AMG Corporation, 
              Kuruli Murhe Vasti Road, Kurali, Chakan, Pune, Maharashtra 410501
            </Link>
            
          </Box>
        </Grid>

        {/* Follow Us */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '23px', textAlign: { xs: 'center', md: 'left' } }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'start' }, gap: '15px' }}>
            <IconButton href="#" sx={{ color: 'black' }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'black' }}>
              <YouTubeIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'black' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'black' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'black' }}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'black' }}>
              <PinterestIcon />
            </IconButton>
           
          </Box>
        </Grid>
      </Grid>

      {/* Privacy Policy and Copyright */}
      <Box
        sx={{
          marginTop: '40px',
          textAlign: 'center',
          borderTop: '1px solid black',
          paddingTop: '10px',
        }}
      >
        <Typography variant="body2" sx={{ fontFamily: 'Rubik, Arial, serif' }}>
          Privacy Policy | © 2024 Exer Mobility. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
