import React, { useRef, useEffect } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LinearProgress from '@mui/material/LinearProgress';

import exer3 from '../Vediophotos/exer3.jpeg';
import exer4 from '../Vediophotos/exer4.jpeg';
import exer5 from '../Vediophotos/exer5.jpeg';
import exer6 from '../Vediophotos/exer6.jpeg';
import exer13 from '../Vediophotos/exer13.jpeg';
import exer14 from '../Vediophotos/exer14.jpeg';
import exer15 from '../Vediophotos/exer15.jpeg';

const images = [
  exer3,

  exer5,
  exer6,
  exer14,
  exer13,
  
  exer4,
  exer15,
];

const ImageCarousel = () => {
  const scrollContainerRef = useRef(null);

  // Scroll left
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -1080, // Adjust based on image size
      behavior: 'smooth',
    });
  };

  // Scroll right
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 1080, // Adjust based on image size
      behavior: 'smooth',
    });
  };

  // Auto-scroll functionality
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     scrollRight();
  //   }, 3000); // Adjust the timing (3000ms = 3 seconds)

  //   return () => clearInterval(interval); // Cleanup the interval on component unmount
  // }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: { xs: '60vh', sm: '55vh', md: '65vh' }, overflow: 'hidden', padding: 2 }}>
      {/* Title */}
      <Typography sx={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', fontSize: { xs: '20px', md: '2rem' } }}>
        <h3>Our Campaigns</h3>
        <Box
  sx={{
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto', // Center the box horizontally
  }}
>
  <LinearProgress
    variant="determinate" // Make it static (no animation)
    value={100} // Set to 100% to fill the progress bar
    sx={{
      width: '100%',
      '& .MuiLinearProgress-bar': {
        backgroundColor: '#FFDB58', // Mustard yellow color
      },
      backgroundColor: '#e0e0e0', // Light grey background for the bar
    }}
  />
</Box>

      </Typography>

      {/* Left Scroll Button */}
      <IconButton
        onClick={scrollLeft}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          zIndex: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Scrollable Container */}
      <Box
        ref={scrollContainerRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Grid container spacing={2} sx={{ flexWrap: 'nowrap' }}>
          {images.map((image, index) => (
            <Grid
              item
              key={index}
              sx={{
                minWidth: { xs: '90%', sm: '50%', md: '25%' }, // Responsive widths
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`Image ${index}`}
                sx={{
                  width: '100%',
                  height: { xs: '45vh', sm: '40vh', md: '50vh' }, // Responsive heights
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Right Scroll Button */}
      <IconButton
        onClick={scrollRight}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          zIndex: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ImageCarousel;
