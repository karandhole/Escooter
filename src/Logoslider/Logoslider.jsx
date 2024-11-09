import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import logo1 from '../assets/e-logo1.jpg';
import logo2 from '../assets/e-logo2.jpg';
import logo3 from '../assets/e-logo3.png';
import logo4 from '../assets/e-logo4.jpg';
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
    <Container sx={{ textAlign: 'center', py: 4 }}>
      <Typography sx={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', fontSize: { xs: '20px', md: '24px' } }}>
        <h3>Our Brand Partners</h3>
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
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default BrandPartners;
