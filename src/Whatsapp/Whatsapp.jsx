import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton, Box } from '@mui/material';

const WhatsAppChatButton = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <IconButton
        color="primary"
        aria-label="Chat on WhatsApp"
        href="https://wa.me/9146476987" // Replace with your WhatsApp link
        target="_blank"
        sx={{
          bgcolor: '#25D366',
          color: '#ffffff',
          '&:hover': {
            bgcolor: '#128C7E',
          },
          width: 50,
          height: 50,
          animation: 'pop 1.5s ease-in-out infinite', // Add animation here
        }}
      >
        <WhatsAppIcon fontSize="large" />
      </IconButton>
      <style>
        {`
          @keyframes pop {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default WhatsAppChatButton;
