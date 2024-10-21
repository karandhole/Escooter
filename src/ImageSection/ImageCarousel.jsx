import React, { useRef, useEffect } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import exer2 from '../Vediophotos/exer2.jpeg';
import exer3 from '../Vediophotos/exer3.jpeg';
import exer4 from '../Vediophotos/exer4.jpeg';
import exer5 from '../Vediophotos/exer5.jpeg';
import exer6 from '../Vediophotos/exer6.jpeg';
import exer7 from '../Vediophotos/exer7.jpeg';
import exer8 from '../Vediophotos/exer8.jpeg';
import exer9 from '../Vediophotos/exer9.jpeg';
import exer10 from '../Vediophotos/exer10.jpeg';
import exer11 from '../Vediophotos/exer11.jpeg';
import exer12 from '../Vediophotos/exer12.jpeg';
import exer13 from '../Vediophotos/exer13.jpeg';
import exer14 from '../Vediophotos/exer14.jpeg';

// Sample images (Replace these with your actual image URLs)
const images = [
  exer2,
  exer3,
  exer4,
  exer5,
  exer6,
  exer7,
  exer8,
  exer9,
  exer10,
  exer11,
  exer12,
  exer13,
  exer14,
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
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000); // Adjust the timing (3000ms = 3 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', padding: 2 }}>
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
            <Grid item key={index} sx={{ minWidth: '33.33%' }}>
              <Box
                component="img"
                src={image}
                alt={`Image ${index}`}
                sx={{
                  width: '100%',
                  height: 'auto',
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
