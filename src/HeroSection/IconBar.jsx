import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import ElectricCarIcon from '@mui/icons-material/ElectricCar'; 
import ElectricScooterIcon from '@mui/icons-material/ElectricScooter'; 
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; 
import ebike from '../website product/G80silver.png';
import ecycle from '../website product/C-Yellow.png';
import { BorderAllRounded } from '@mui/icons-material';

const IconBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '50px', 
        display: 'flex',
        justifyContent: 'space-between', // Space between icons and "Special Offer"
        alignItems: 'center', 
        backgroundColor: 'black', 
        px: 2, 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
        '@media (max-width: 600px)': {
          px: 1, 
        },
      }}
    >
      {/* Center-aligned Icons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', 
          gap: 2, 
        }}
      >
        {/* Electric Bike Icon */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <IconButton
            aria-label="Electric Bike"
            sx={{ color: 'white', '&:hover': { color: 'green' } }}
            onClick={() => alert('Electric Bike clicked')}
          >
            <img src={ebike} alt="Electric Bike" style={{ width: '40px', height: '40px', borderRadius:'40px', border:'2px white'}} />
          </IconButton>
          <Typography sx={{ color: 'white', fontSize: '12px', '&:hover': { color: 'green' }, ml: '5px' }}>
            Electric Scooter
          </Typography>
        </Box>

        {/* Electric Car Icon */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <IconButton
            aria-label="Electric Bike"
            sx={{ color: 'white', '&:hover': { color: 'green' } }}
            onClick={() => alert('Electric Bike clicked')}
          >
            <img src={ecycle} alt="Electric Bike" style={{ width: '40px', height: '40px', borderRadius:'40px', border:'2px white'}} />
          </IconButton>
          <Typography sx={{ color: 'white', fontSize: '12px', '&:hover': { color: 'green' }, ml: '5px' }}>
            Electric Cycles
          </Typography>
         
        </Box>

        {/* Electric Scooter Icon */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}
        >
           <IconButton
            aria-label="Electric Bike"
            sx={{ color: 'white', '&:hover': { color: 'green' } }}
            onClick={() => alert('Electric Bike clicked')}
          >
            <img src={ebike} alt="Electric Bike" style={{ width: '40px', height: '40px', borderRadius:'40px', border:'2px white'}} />
          </IconButton>
          <Typography sx={{ color: 'white', fontSize: '12px', '&:hover': { color: 'green' }, ml: '5px' }}>
            Electric Bike
          </Typography>
         
        </Box>
      </Box>

      {/* Special Offer Icon aligned to the right */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <IconButton
          aria-label="Offer"
          sx={{ color: 'white', '&:hover': { color: 'green' } }}
          onClick={() => alert('Offer clicked')}
        >
          <LocalOfferIcon fontSize="large" />
          <Typography sx={{ color: 'white', fontSize: '12px','&:hover': { color: 'green' }, ml: '5px' }}>
          Special Offer
        </Typography>
        </IconButton>
        
      </Box>
    </Box>
  );
};

export default IconBar;
