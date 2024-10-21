import React from 'react';
import { Box } from '@mui/material';
import baner from '../Vediophotos/baner.jpeg'

const Banner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxHeight: '560px', 
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <img
        src={baner} // Replace with your image URL
        alt="Banner"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default Banner;
