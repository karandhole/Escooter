import React, { useState } from 'react';
import { Box, Tabs, Tab, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; 
import images1 from '../assets/images1-removebg-preview.png'
 
import images2 from '../assets/images2__2_-removebg-preview.png';
import images3 from '../assets/images3__2_-removebg-preview.png';
import images4 from '../assets/images4-removebg-preview.png';
//import images5 from '../assets/images5-removebg-preview.png';

import images6 from '../assets/images6 (1).png';
import images7 from '../assets/images7 (1).png';
import images8 from '../assets/images8 (1).png';
import images9 from '../assets/images9 (1).png';
//import images10 from '../assets/images10 (1).png';

import img11 from '../assets/img11-removebg-preview.png'
import img12 from '../assets/img12-removebg-preview.png'
import img13 from '../assets/img13-removebg-preview.png'


const images = {
  design: [
    {
      title: "HYPERBLADE LED TAIL LIGHT",
      subtitle: "BUILT FOR DURABILITY & FUNCTIONALITY",
      imageUrl: images1, 
    },
    {
      title: "BUILT FOR STRENGTH",
      subtitle: "STEADY RIDE NO MATTER THE LOAD",
      imageUrl: images2,
    },
    {
      title: "BUILT FOR SAFETY",
      subtitle: "BRIGHTER RIDES SAFER JOURNEYS",
      imageUrl: images3,
    },
    {
      title: "TURBOGRIP ALLOY WHEEL",
      subtitle: "STABLE RIDE ON ANY TERRAIN",
      imageUrl: images4,
    },
    
  ],
  performance: [
    {
      title: "RANGE & SPEED",
      subtitle: "80+KM*(LI-ON)&25KMH MAX-SPEED",
      imageUrl: images6,
    },
    {
      title: "NO LICENSE & REGISTRATION",
      subtitle: "LOW SPEED SAFETY ASSURED FREE SHIPPING",
      imageUrl: images7,
    },
    {
      title: "CHARGING",
      subtitle: "EFFICIENT AUTO-CUT CHARGER WITH FAST CHARGING",
      imageUrl: images8,
    },
    {
      title: "BATTERY",
      subtitle: "HIGH-CAPACITY LI-ON & LEAD ACID OPTIONS",
      imageUrl: images9,
    },
    
  ],
};

const features = [
  {
    img: img11,
    title: 'Quick Charge Capability',
  },
  {
    img: img12,
    title: 'No License & No Registration',
  },
  {
    img: img13,
    title: 'Comfortable & Convenient',
  },
];

const ImageCard = ({ title, subtitle, imageUrl }) => (
  <Card sx={{ 
    maxWidth: '100%', 
    margin: '10px', 
    cursor: 'pointer', 
    borderRadius: '15px',
    boxShadow: 'none', 
  }}>
    <Zoom>
      <CardMedia
        component="img"
        height="290"
        image={imageUrl}
        alt={title}
        sx={{
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.5)',
          },
        }}
      />
    </Zoom>
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
    </CardContent>
  </Card>
);

const ImageGallery = ({ category }) => (
  <Grid container spacing={2} justifyContent="center">
    {images[category].map((item, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}> {/* Responsive breakpoints for mobile, tablet, and desktop */}
        <ImageCard {...item} />
      </Grid>
    ))}
  </Grid>
);

const DesignPerformanceTabs = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Box sx={{ 
        width: '100%', 
        backgroundColor: 'aliceblue', 
        padding: { xs: '8px', sm: '16px', md: '24px' }, 
        marginBottom: '30px',
      }}>
        {/* Tabs */}
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          centered 
          TabIndicatorProps={{ style: { backgroundColor: 'green' } }}
          sx={{ 
            '& .MuiTab-root': {
              fontSize: { xs: '1rem', sm: '1.5rem', md: '2.5rem' }, // Font size adjusts based on screen size
              textTransform: 'none',
              border: 'none', // Remove border
              outline: 'none', // Remove outline
              fontWeight:'600',
              color:'#706e68'
            },
            '& .Mui-selected': {
              color: '#030202',
              borderBottom: 'none', // Remove border from the active tab
            },
            '& .MuiTab-root:hover': {
              color: '#3b3636', // Hover color for tabs
            }
          }}
        >
          <Tab label="Design" disableRipple />
          <Tab label="Performance" disableRipple />
        </Tabs>

        {/* Tab Panels */}
        <Box sx={{ padding: 3 }}>
          {tabValue === 0 && <ImageGallery category="design" />}
          {tabValue === 1 && <ImageGallery category="performance" />}
        </Box>
      </Box>

      {/* Salient Features Section */}
      <Box sx={{ padding: { xs: '20px', sm: '40px' }, backgroundColor: '#fff' }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom 
          sx={{ 
            fontWeight: '700', 
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, 
          }}
        >
          SALIENT FEATURES
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ textAlign: 'center', padding: 2 }}>
                <CardMedia
                  component="img"
                  height="290"
                  image={feature.img}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                      fontWeight: 'bold', 
                      fontSize: { xs: '1rem', sm: '1.5rem', md: '1.7rem' },
                    }}
                  >
                    {feature.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default DesignPerformanceTabs;