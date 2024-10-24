import React, { useState } from 'react';
import { Box, Tabs, Tab, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; 
import images1 from '../assets/images1.jpg';
import images2 from '../assets/images2.jpg';
import images3 from '../assets/images3.jpg';
import images4 from '../assets/images4.jpg';
import images6 from '../assets/images6.jpg';
import images7 from '../assets/images7.jpg';
import images8 from '../assets/images8.jpg';
import images9 from '../assets/images9.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';

const images = {
  design: [
    {
      title: "HBL TAIL LIGHT",
      subtitle: "BUILD DURABLE & FUNCTIONAL",
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
      title: "TURBOGRIP WHEEL",
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
      title: "NO LICENSE REQ ",
      subtitle: "LOW SPEED SAFE + FREE SHIP",
      imageUrl: images7,
    },
    {
      title: "CHARGING",
      subtitle: "AUTO-CUT FAST CHARGER ",
      imageUrl: images8,
    },
    {
      title: "BATTERY",
      subtitle: "HIGH-CAP BATTERY OPTONS",
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
    title: 'No License Reqirement',
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
    position: 'relative',
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
            transform: 'scale(1.05)',
          },
        }}
      />
    </Zoom>
    <CardContent >
      <Typography 
        gutterBottom 
        variant="h6" 
        component="div" 
        sx={{ fontWeight: '700', textAlign: 'center',color: '#000',fontSize:'24px',  }} // Increased font weight for the title
      >
        {title}
      </Typography>
      <Typography 
        variant="body2" 
        color="text.secondary" 
        sx={{ fontWeight: '500', textAlign: 'center',color:'#000',fontSize:'16' }} // Increased font weight for the subtitle
      >
        {subtitle}
      </Typography>
    </CardContent>
  </Card>
);

const ImageGallery = ({ category }) => (
  <Grid container spacing={2} justifyContent="center">
    {images[category].map((item, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          centered 
          textColor="inherit" // This will inherit the color from the sx styles
          indicatorColor="secondary"
          TabIndicatorProps={{ style: { backgroundColor: 'green' } }}
          sx={{ 
            '& .MuiTab-root': {
              fontSize: { xs: '1rem', sm: '1.5rem', md: '2.5rem' }, 
              textTransform: 'none',
              fontWeight: '600',
              color: '#595555',
            },
            '& .Mui-selected': {
              color: '#030202',
            },
            '& .MuiTab-root:hover': {
              color: '#3b3636',
            },
          }}
        >
          <Tab label="Design" disableRipple />
          <Tab label="Performance" disableRipple />
        </Tabs>

        <Box sx={{ padding: 3 }}>
          {tabValue === 0 && <ImageGallery category="design" />}
          {tabValue === 1 && <ImageGallery category="performance" />}
        </Box>
      </Box>

      <Box sx={{ padding: { xs: '20px', sm: '40px' }, backgroundColor: '#fff' }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom 
          sx={{ 
            fontWeight: '700', // Increased font weight for SALIENT FEATURES title
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
                  height="400"
                  image={feature.img}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                      fontWeight: '700', // Increased font weight for feature titles
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