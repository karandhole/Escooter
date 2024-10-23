import React from 'react';
import { Box, Typography } from '@mui/material';
import character from '../ProductImages/character.png'
const ContactNote = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 25px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      {/* Left Section: Text */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: 'center', md: 'left' },
          paddingRight: {md: '20px' },
          marginBottom: { xs: '20px', md: '0' },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', color: '#333', marginBottom: '20px' ,fontSize:'27px'}}
        >
          CALL US TO KNOW MORE ABOUT THE <br/>E-SCOOTER
        </Typography>
        <Typography variant="body1" sx={{ color: '#555',fontSize:'20px',fontWeight:'500' }}>
          10am - 6pm Weekdays
        </Typography>
      </Box>

      {/* Right Section: Contact Box with Cartoon */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#000',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'left',
            width: '100%',
            maxWidth: '300px',
            zIndex: 1,
          }}
        >
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            E-Scooter Enquiry
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#00ff85',
              display: 'flex',
              justifyContent:'flex-start',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            <i className="fas fa-phone" style={{ marginRight: '5px' }}></i>
            +91 8956301541/42
          </Typography>
        </Box>

        {/* Cartoon Image placed inside with Z-index */}
        <Box
          component="img"
          src={character}
          alt="Cartoon Character"
          sx={{
            height: { xs: '120px', sm: '150px', md: '180px' },
            width: 'auto',
            position: 'absolute',
            right: { xs: '0px', sm: '200px', md: '150px' },
            left: { xs: '190px', sm: '0px', md: '0px' },
            top: '-30px',
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactNote;
