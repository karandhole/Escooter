import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Import images
import exer3 from '../website product/C 80.png';
import exer4 from '../website product/C-Yellow.png';
import exer5 from '../website product/D80 black.png';
import exer6 from '../website product/D80 blue.png';
import exer13 from '../website product/D80 red.png';
import exer14 from '../website product/D80 white.png';
import exer15 from '../website product/G80silver.png';
import exer1 from '../website product/G80white.png';
import exer2 from '../website product/G150 silver.png';
import exer7 from '../website product/P80 red.jpeg';
import exer8 from '../website product/V80 red.png';
import exer9 from '../website product/V80WHITE.png';
import exer10 from '../website product/V150 white.png';
import exer11 from '../website product/Y80 white.png';
import exer12 from '../website product/Y80silver.jpeg';
import exer16 from '../website product/Z80RED.png';
import exer17 from '../website product/Z80WHITE.JPG';

// Image array
const images = [
  { src: exer16, title: 'Z80 RED' },
  { src: exer17, title: 'Z80 WHITE' },
  { src: exer5, title: 'D 80 black' },
  { src: exer6, title: 'D 80 blue' },
  { src: exer13, title: 'D 80 red' },
  { src: exer14, title: 'D 80 white' },
  { src: exer15, title: 'G80 silver' },
  { src: exer1, title: 'G80 white' },
  { src: exer2, title: 'G150 silver' },
  { src: exer7, title: 'P80 red' },
  { src: exer8, title: 'V80 red' },
  { src: exer9, title: 'V80 WHITE' },
  { src: exer10, title: 'V150 white' },
  { src: exer11, title: 'Y80 white' },
  { src: exer12, title: 'Y80 silver' },
  { src: exer3, title: 'C 80' },
  { src: exer4, title: 'C-Yellow' },
];

// Duplicate the array for continuous sliding
const infiniteImages = [...images, ...images];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesToShow = 4; // Number of visible slides

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % infiniteImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? infiniteImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-play every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%', padding: 2 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          paddingBottom: 2,
          fontSize: { xs: '20px', md: '2rem' },
        }}
      >
        Our Products
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        {/* Previous Button */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 0,
            zIndex: 10,
            color: 'black',
            backgroundColor: 'white',
            '&:hover': { backgroundColor: 'gray', color: 'white' },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        {/* Slider Container */}
        <Box
          sx={{
            display: 'flex',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
              transition: 'transform 0.5s ease-in-out',
              gap: 0.4,
              width: `${(infiniteImages.length / slidesToShow) * 100}%`,
            }}
          >
            {infiniteImages.map((image, index) => (
              <Box
                key={index}
                sx={{
                  flex: `0 0 calc(100% / ${slidesToShow})`,
                  textAlign: 'center',
                }}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.title}
                  sx={{
                    width: '100%',
                    height: { xs: '25vh', sm: '35vh', md: '40vh' },
                    objectFit: 'contain',
                    borderRadius: '10px',
                    boxShadow: '5px 4px 20px rgba(0, 0, 0, 0.5)',
                  }}
                />
                <Typography sx={{ marginTop: 1 ,fontSize:'18px',fontWeight:'600'}}>{image.title}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Next Button */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 0,
            zIndex: 10,
            color: 'black',
            backgroundColor: 'white',
            '&:hover': { backgroundColor: 'gray', color: 'white' },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductSlider;
