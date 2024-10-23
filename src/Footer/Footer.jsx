import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import logo from '../assets/logo2.png';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#d4edda', // Light green background color
        color: 'black',             // Text color black
        padding: { xs: '20px 10px', md: '40px 20px' }, // Padding adjusts for small/large screens
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '16px',
      }}
    >
      <Grid container spacing={2} justifyContent="space-between" alignItems="flex-start">
        {/* Responsive Logo Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: { xs: 'center', md: 'center' }, marginBottom: { xs: '20px', md: '0' } }}>
            {/* Image for the logo */}
            <img 
              src={logo} 
              alt="91 Logo" 
              style={{ width: '300px', height: 'auto', marginBottom: '10px' }} 
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '23px' , alignContent:'center', textAlign:'center'}}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'center' }, gap: '10px' , alignItems:'center'}}>
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
            </Box>
          </Box>
        </Grid>

        {/* Vehicle Categories */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '23px', textAlign: { xs: 'center', md: 'left' } }}>
            Vehicle Categories
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px',fontWeight: '500', alignItems: { xs: 'center', md: 'start' } }}>
            <Link href="#" underline="hover" color="inherit">Active Series</Link>
            <Link href="#" underline="hover" color="inherit">Speed Series</Link>
            <Link href="#" underline="hover" color="inherit">Cargo Series</Link>
            <Link href="#" underline="hover" color="inherit">E-Bicycle</Link>
            <Link href="#" underline="hover" color="inherit">Toys</Link>
            <Link href="#" underline="hover" color="inherit">Accessories</Link>
          </Box>
        </Grid>

        {/* Important Pages */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '23px', textAlign: { xs: 'center', md: 'left' } }}>
            Important Pages
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', fontWeight: '500',gap: '15px', alignItems: { xs: 'center', md: 'start' } }}>
            <Link href="#" underline="hover" color="inherit">E-Scooter</Link>
            <Link href="#" underline="hover" color="inherit">Rental Services</Link>
            <Link href="#" underline="hover" color="inherit">E-Bicycle</Link>
          </Box>
        </Grid>

        {/* Contact Details */}
        <Grid item xs={12} sm={6} md={3.5}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '23px', textAlign: { xs: 'center', md: 'left' } }}>
            Contact Details
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', fontWeight: '500',gap: '15px', alignItems: { xs: 'center', md: 'start' } }}>
            <Link href="#" underline="hover" color="inherit">
              <PhoneAndroidIcon />  +91 8956301541/42
            </Link>
            <Link href="#" underline="hover" color="inherit">
              <EmailIcon/> sales@exerenergy.com
            </Link>
            <Link href="#" underline="hover" color="inherit">
              <LocationOnIcon/> Exerval Private Limited, Exer Energy, GAT No – 309/3, Opposite to AMG Corporation, 
              Kuruli Murhe Vasti Road, Kurali, Chakan, Pune, Maharashtra 410501
            </Link>
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
