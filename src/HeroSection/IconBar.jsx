import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ebike from '../website product/G80silver.png';
import ecycle from '../website product/C-Yellow.png';

const IconBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between', // Space between icons and "Special Offer"
        alignItems: 'center',
        backgroundColor: '#494746 ',
        px: 2,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        '@media (max-width: 600px)': {
          px: 1,
          flexDirection: 'column', // Stack elements vertically on small screens
          height: 'auto',
          gap: 2,
        },
      }}
    >
      {/* Center-aligned Icons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          '@media (max-width: 600px)': {
            gap: 1, // Smaller gap between icons on mobile
          },
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
            sx={{
              color: 'white',
              '&:hover': { color: 'green' },
              '@media (max-width: 600px)': {
                p: 0, // Remove padding on small screens
              },
            }}
            onClick={() => alert('Electric Bike clicked')}
          >
            <img
              src={ebike}
              alt="Electric Bike"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '40px',
                border: '2px solid white',
                '@media (max-width: 600px)': {
                  width: '30px', // Smaller image on mobile
                  height: '30px',
                },
              }}
            />
          </IconButton>
          <Typography
            sx={{
              color: 'white',
              fontSize: '12px',
              '&:hover': { color: 'green' },
              ml: '5px',
              '@media (max-width: 600px)': {
                fontSize: '10px', // Smaller font size on mobile
                ml: '3px', // Less margin on mobile
              },
            }}
          >
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
            aria-label="Electric Cycle"
            sx={{
              color: 'white',
              '&:hover': { color: 'green' },
              '@media (max-width: 600px)': {
                p: 0,
              },
            }}
            onClick={() => alert('Electric Cycle clicked')}
          >
            <img
              src={ecycle}
              alt="Electric Cycle"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '40px',
                border: '2px solid white',
                '@media (max-width: 600px)': {
                  width: '30px',
                  height: '30px',
                },
              }}
            />
          </IconButton>
          <Typography
            sx={{
              color: 'white',
              fontSize: '12px',
              '&:hover': { color: 'green' },
              ml: '5px',
              '@media (max-width: 600px)': {
                fontSize: '10px',
                ml: '3px',
              },
            }}
          >
            Electric Cycles
          </Typography>
        </Box>

       
      </Box>

      {/* Special Offer Icon aligned to the right */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          '@media (max-width: 600px)': {
            justifyContent: 'center', // Center on small screens
            mt: 1, // Add margin on mobile for separation
          },
        }}
      >
        {/* <IconButton
          aria-label="Offer"
          sx={{
            color: 'white',
            '&:hover': { color: 'green' },
            '@media (max-width: 600px)': {
              p: 0,
            },
          }}
          onClick={() => alert('Offer clicked')}
        >
          <LocalOfferIcon fontSize="large" />
          <Typography
            sx={{
              color: 'white',
              fontSize: '12px',
              '&:hover': { color: 'green' },
              ml: '5px',
              '@media (max-width: 600px)': {
                fontSize: '10px',
                ml: '3px',
              },
            }}
          >
            Special Offer
          </Typography>
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default IconBar;
