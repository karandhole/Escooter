import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import logo1 from '../assets/e-logo1.png';
import logo2 from '../assets/e-logo2.png';
import logo3 from '../assets/e-logo3.png';
import logo4 from '../assets/e-logo4.png';
import logo5 from '../assets/e-logo5.png';

// Sample logos with src and alt properties
const brandLogos = [
  { src: logo1, alt: 'Brand 1' },
  { src: logo2, alt: 'Brand 2' },
  { src: logo3, alt: 'Brand 3' },
  { src: logo4, alt: 'Brand 4' },
  { src: logo5, alt: 'Brand 5' },
];

const BrandPartners = () => {
  return (
    <Box sx={{ bgcolor: 'aliceblue', py: 4 }}>
      <Container sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            paddingTop: '10px',
            paddingBottom: '10px',
            marginBottom: '0px',
            // fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem',
            fontSize: { xs: '20px', md: '2rem' },
          }}
        >
          <h3>Our Finance Partners</h3>
          <Box
  sx={{
    width: '20%',
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
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2 },
            960: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {brandLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={logo.src}
                alt={logo.alt}
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '150px',
                  margin: '0 auto',
                  paddingTop: '40px',
                  paddingBottom: '20px',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default BrandPartners;
