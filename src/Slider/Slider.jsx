import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import pagination style (optional)
import { Pagination, Autoplay } from 'swiper/modules'; // Import Pagination and Autoplay
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'; // Import Material-UI Icons
import img1 from '../assets/banner4.jpg';
import img2 from '../assets/slider2.png';
import img3 from '../assets/slider3.png';

// Image array
const images = [
  {
    src: img1,
    alt: 'Image 1',
  },
  {
    src: img2,
    alt: 'Image 2',
  },
  {
    src: img3,
    alt: 'Image 3',
  },
];

const ImageSlider = () => {
  // Create refs for navigation
  const swiperRef = useRef(null);

  return (
    <Box
      sx={{
        width: '98.9vw', // Full width to fit the screen
        my: 0, // Remove vertical margin
        px: 0, // Remove horizontal padding
        overflow: 'hidden', // Ensure no horizontal scrollbars
        '@media (max-width: 600px)': {
          width: '100vw', 
      // Ensure it remains full width on mobile
        },
      }}
    >
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay]} // Exclude Navigation module
        spaceBetween={0} // Remove space between slides for full-width effect
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Keep autoplay running even after user interaction
        pagination={{ clickable: true }}
        loop // Enable looping
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        sx={{
          width: '100%',
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover', // Maintain aspect ratio
                maxHeight: '800px',
                '@media (max-width: 600px)': {
                  maxHeight: '600px',
                },
              }}
            />
          </SwiperSlide>
        ))}

        {/* Custom Previous Button */}
        <IconButton
          sx={{
            position: 'absolute',
            top: '50%',
            left: '10px', // Position it to the left side
            zIndex: 10,
            color: 'black',
            width: '35px', // Set width
            height: '35px', // Set height
            paddingLeft:'15px',
            transform: 'translateY(-50%)', // Center vertically
            backgroundColor: 'white', // Optional: make it stand out more
            borderRadius: '50%', // Circular button
            display: 'flex', // Flex to center content
            alignItems: 'center', // Center the icon vertically
           justifyContent: 'center', // Center the icon horizontally
            '&:hover': {
              backgroundColor: '#f0f0f0', // Change color on hover
            },
            '@media (max-width: 600px)': {
              width: '25px', // Smaller width for mobile
              height: '25px', // Smaller height for mobile
            },
          }}
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.swiper.slidePrev(); // Move to the previous slide
            }
          }}
        >
          <ArrowBackIos sx={{ fontSize: '20px' }} />
        </IconButton>

        {/* Custom Next Button */}
        <IconButton
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10px', // Position it to the right side
            zIndex: 10,
            color: 'black',
            width: '35px', // Set width
            height: '35px', // Set height
            transform: 'translateY(-50%)', // Center vertically
            backgroundColor: 'white', // Optional: make it stand out more
            borderRadius: '50%', // Circular button
            display: 'flex', // Flex to center content
            alignItems: 'center', // Center the icon vertically
            justifyContent: 'center', // Center the icon horizontally
            '&:hover': {
              backgroundColor: '#f0f0f0', // Change color on hover
            },
            '@media (max-width: 600px)': {
              width: '25px', // Smaller width for mobile
              height: '25px', // Smaller height for mobile
            },
          }}
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.swiper.slideNext(); // Move to the next slide
            }
          }}
        >
          <ArrowForwardIos sx={{ fontSize: '20px' }} />
        </IconButton>
      </Swiper>
    </Box>
  );
};

export default ImageSlider;
