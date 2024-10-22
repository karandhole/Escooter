import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import battery from '../../src/ProductImages/battery.png';
import charger from '../../src/ProductImages/charger.png';
import motor from '../../src/ProductImages/motor.png';
import speed from '../../src/ProductImages/speed.png';
import v1 from '../../src/website product/V80RED.png';
import v2 from '../../src/website product/V80WHITE.png';
import g1 from '../../src/website product/G80silver.png';
import g2 from '../../src/website product/G80white.png';
import z1 from '../../src/website product/Z80RED.png';
import z2 from '../../src/website product/Z80WHITE.JPG';
import d1 from '../../src/website product/D80 red.png';
import d2 from '../../src/website product/D80 white.png';
import d3 from '../../src/website product/D80 blue.png';
import d4 from '../../src/website product/D80 black.png';
import y1 from '../../src/website product/Y80silver.jpeg';
import y2 from '../../src/website product/Y80 white.png';
import p1 from '../../src/website product/P80 red.jpeg';
import c1 from '../../src/website product/C 80.png';

const VehicleComponent = () => {
  const [selectedSeries, setSelectedSeries] = useState('ACTIVE');
  const [selectedSubSeries, setSelectedSubSeries] = useState('V80');
  const [selectedColor, setSelectedColor] = useState('Red');
  const [selectedBattery, setSelectedBattery] = useState('Lead Acid');

  const subSeriesMap = {
    ACTIVE: ['V80', 'G80', 'Z80', 'D80', 'Y80', 'P80'],
    SPEED: ['V150', 'G150'],
    CARGO: ['C80_CARGO', 'METAL_CARGO_2W', 'METAL_CARGO_3W'],
  };

  const handleSeriesChange = (series) => {
    setSelectedSeries(series);
    const defaultSubSeries = subSeriesMap[series][0];
    setSelectedSubSeries(defaultSubSeries);
    setSelectedColor(Object.keys(colorImageMap[defaultSubSeries])[0]);
  };

  const handleSubSeriesChange = (subSeries) => {
    setSelectedSubSeries(subSeries);
    setSelectedColor(Object.keys(colorImageMap[subSeries])[0]);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleBatteryChange = (event) => {
    setSelectedBattery(event.target.value);
  };

  const subSeriesData = {
    V80: {
      MOTOR: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
      battery: { text: 'Grapene ion Lithium ion 60V 30AH', img: battery },
      topspeed: { text: '25KMPH', img: speed },
      charger: { text: '60V 3AH 4-5Hrs', img: charger },
      
    },
    G80: {
      motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
      battery: { text: 'Grapene ion Lithium ion 60V 30AH', img: battery },
      topspeed: { text: '25KMPH', img: speed },
      charger: { text: '60V 3AH 4-5Hrs', img: charger },
      
    },
    Z80: {
        motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
        battery: { text: 'Grapene ion Lithium ion 60V 30AH', img: battery },
        topspeed: { text: '25KMPH', img: speed },
        charger: { text: '60V 3AH 4-5Hrs', img: charger },
       
      },
    D80: {
        motor: { text: 'BLDC Motor with 18 Months Warranty', img: motor },
        battery: { text: 'Grapene ion Lithium ion 60V 30AH', img: battery },
       topspeed: { text: '25KMPH', img: speed },
        charger: { text: '60V 3AH 4-5Hrs', img: charger  },
        
      },
      Y80: {
        motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
        battery: { text: 'Grapene ion Lithium ion 60V 30AH', img: battery },
        topspeed: { text: '25KMPH', img: speed},
        charger: { text: '60V 3AH 4-5Hrs', img: charger },
      
      },
      P80: {
        motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
        battery: { text: 'Grapene ion Lithium ion 60V 30AH', img: battery },
        topspeed: { text: '25KMPH', img: speed },
        charger: { text: '60V 3AH 4-5Hrs', img: charger },
        
      },
    V150: {
      motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
      battery: { text: 'Lithium ion 60V 40AH', img: battery },
      topspeed: { text: '55KMPH', img: speed },
      charger: { text: '60V 6AH 4-5Hrs', img: charger },
      
    },
    G150: {
      motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
      battery: { text: 'Lithium ion 60V 40AH', img: battery},
      topspeed: { text: '50KMPH', img: speed },
      charger: { text: '60V 6AH Charger', img: charger },
      
    },
    C80_CARGO: {
        motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
        battery: { text: 'Grapene ion Lithium ion 60V 30AH', img: battery },
        topspeed: { text: '25KMPH', img: speed },
        charger: { text: '60V 3AH 4-5Hrs', img: charger },
      
    },
    METAL_CARGO_2W: {
        motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
        battery: { text: 'Grapene ion Lithium ion 60V 30AH', img: battery },
        topspeed: { text: '25KMPH', img: speed },
        charger: { text: '60V 3AH 4-5Hrs', img: charger},
      
    },
    METAL_CARGO_3W: {
        motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
        battery: { text: 'Grapene ion Lithium ion 60V 30AH', img: battery },
        topspeed: { text: '25KMPH', img: speed },
        charger: { text: '60V 3AH 4-5Hrs', img: charger },
     
    },
  };

  const priceData = {
    V80: 'MRP ₹45,999* /-',
    G80: 'MRP ₹44,999* /-',
    Z80: 'MRP ₹44,999* /-',
    D80: 'MRP ₹47,999* /-',
    Y80: 'MRP ₹54,999* /-',
    P80: 'MRP ₹59,999* /-',
    V150: 'MRP ₹65,999* /-',
    G150: 'MRP ₹69,999* /-',
    C80_CARGO: 'MRP ₹55,999* /-',
    METAL_CARGO_2W: 'MRP ₹58,999* /-',
    METAL_CARGO_3W: 'MRP ₹69,999* /-',
  };

  const colorImageMap = {
    V80: {
      Red: v1,
      White: v2,
    },
    G80: {
      White: g2,
      Silver: g1,
    },
    Z80: {
      Red: z1,
      White: z2,
    },
    D80: {
      Red: d1,
      White: d2,
      Grey: d4,
      Blue: d3,
    },
    V150:{
      Red: v1,
      White: v2,
    },
    G150:{
      Red: v1,
      White: v2,
    },
    C80_CARGO:{
      Yellow:c1
    },
    METAL_CARGO_2W:{
      Yellow:c1
    },
    METAL_CARGO_3W:
    {
      Yellow:c1
    },
    Y80:{
      Silver:y1,
      White:y2
   },
   P80:{
     Red: p1
   }
  };

  return (
    <Box sx={{ padding: '20px', paddingTop:'100px' }}>
      {/* Main Series Selection */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap', // Make buttons wrap on smaller screens
          gap: '10px',
        }}
      >
        {['ACTIVE', 'SPEED', 'CARGO'].map((series) => (
          <Button
            key={series}
            variant="contained"
            onClick={() => handleSeriesChange(series)}
            sx={{
              backgroundColor: selectedSeries === series ? '#00ff99' : 'lightgray',
              color: 'black',
              padding: { xs: '10px 30px', sm: '20px 50px' }, // Responsive padding
              margin: '0 10px',
              boxShadow: 3,
              borderRadius: '8px',
              fontSize: { xs: '18px', sm: '18px' }, // Responsive font size
              fontWeight: '900',
              
            }}
          >
            {series} Series
          </Button>
        ))}
      </Box>

      {/* Subseries Selection */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap', // Wrap subseries buttons on smaller screens
          paddingTop:'50px',
          paddingBottom:'0px'
        }}
      >
        {subSeriesMap[selectedSeries].map((subSeries) => (
          <Button
            key={subSeries}
            variant="outlined"
            onClick={() => handleSubSeriesChange(subSeries)}
            sx={{
              backgroundColor: selectedSubSeries === subSeries ? '#00ff99' : 'white',
              color: selectedSubSeries === subSeries ? 'black' : 'black',
              padding: { xs: '8px', sm: '15px' },
              width: { xs: '140px', sm: '200px' }, // Responsive width
              height: '80px',
              borderRadius: '8px',
              fontSize: { xs: '18px', sm: '16px' }, // Responsive font size
              border: 'none',
              fontWeight: '800',
            }}
          >
            {subSeries}
          </Button>
        ))}
      </Box>

      <hr />

      {/* Vehicle Image and Specifications */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', lg: 'row' }, // Stack on smaller screens
          marginTop: '80px',
        }}
      >
        {/* Specifications */}
        <Box sx={{ width: { xs: '100%', lg: '25%' }, display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {subSeriesData[selectedSubSeries] &&
            Object.entries(subSeriesData[selectedSubSeries]).map(([key, value]) => (
              <Box
                key={key}
                sx={{
                  padding: '20px',
                  backgroundColor: 'white',
                  boxShadow: 3,
                  borderRadius: '8px',
                  height: '140px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ marginRight: '15px' }}>
                  <img src={value.img} alt={key} style={{ width: '50px', height: '50px' }} />
                </Box>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '21px' }}>
                    {key.toUpperCase()}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '18px', fontStyle: 'italic' }}>
                    {value.text}
                  </Typography>
                </Box>
              </Box>
            ))}
        </Box>

        {/* Vehicle Image */}
        <Box
          sx={{
            width: { xs: '100%', lg: '40%' }, // Adjust width for smaller screens
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginY: { xs: '20px', lg: '0' }, // Add space on small screens
          }}
        >
          <img
            src={colorImageMap[selectedSubSeries]?.[selectedColor]}
            alt={`${selectedSubSeries} - ${selectedColor}`}
            style={{ width: '100%', maxWidth: '1200px', height: 'auto' }} // Responsive image
          />
        </Box>

        {/* Color Selection */}
        <Box
          sx={{
            width: { xs: '100%', lg: '15%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            padding: '0px',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '22px' }}>
        Select Color
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        {Object.keys(colorImageMap[selectedSubSeries]).map((color) => (
          <Box
            key={color}
            onClick={() => handleColorChange(color)}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5px',
              alignItems: 'center',
              minWidth: '90px',
              padding: '4px',
              boxShadow: 'initial',
              borderRadius: '10px',
              cursor: 'pointer',
              border: 'solid 1px #9b9898',
              backgroundColor: selectedColor === color ? '#D3D3D3' : 'transparent', // Light grey when selected
              '&:hover': {
                backgroundColor: selectedColor === color ? '#D3D3D3' : '#f0f0f0', // Light grey when hovered if not selected
              },
            }}
          >
            <Typography variant="body2" sx={{ fontSize: '16px', fontStyle: 'normal' }}>
              {color}
            </Typography>
            <Box
              sx={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: color.toLowerCase(),
                border: selectedColor === color ? '2px solid green' : 'none',
              }}
            />
          </Box>
        ))}
      </Box>
        </Box>
      </Box>

     {/* Battery Selection and Price/Buy Now Button */}
<Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Stacks vertically on small screens, horizontally on larger screens
    justifyContent: { xs: 'center', sm: 'space-between' }, // Center on small screens, space between on large
    alignItems: { xs: 'center', sm: 'flex-start' }, // Align items at the start on larger screens
    marginTop: '40px',
    gap: { xs: '20px', sm: '0' }, // Adds gap on small screens
  }}
>
  {/* Battery Selection */}
  <Box
    sx={{
      width: { xs: '100%', sm: '25%' }, // Full width on small screens, 25% on larger
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons vertically on small screens
      gap: { xs: '10px', sm: '0' }, // Adds space between buttons on small screens
    }}
  >
    <Box
      sx={{
        padding: '15px',
        backgroundColor: selectedBattery === 'Lead Acid' ? 'black' : 'grey',
        boxShadow: 3,
        borderRadius: '8px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        width: { xs: '100%', sm: '47%' }, // Full width on small screens
        color: '#00e68a',
        fontSize: '18px',
        fontWeight: 'bold',
      }}
      onClick={() => setSelectedBattery('Lead Acid')}
    >
      GRAPHENE ION
    </Box>
    <Box
      sx={{
        padding: '15px',
        backgroundColor: selectedBattery === 'Lithium Ion' ? 'black' : 'grey',
        boxShadow: 3,
        borderRadius: '8px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        width: { xs: '100%', sm: '47%' }, // Full width on small screens
        color: '#00e68a',
        fontSize: '18px',
        fontWeight: 'bold',
      }}
      onClick={() => setSelectedBattery('Lithium Ion')}
    >
      LITHIUM ION
    </Box>
  </Box>

  {/* Price and Buy Now */}
  <Box
    sx={{
      width: { xs: '100%', sm: '25%' }, // Full width on small screens, 25% on larger
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column', // Stack price and button vertically
      alignItems: 'center',
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontWeight: 'bold',
        fontSize: { xs: '22px', sm: '28px' }, // Smaller font on small screens
      }}
    >
      {priceData[selectedSubSeries]}
    </Typography>
    <Button
      variant="contained"
      sx={{
        backgroundColor: 'orange',
        color: 'white',
        padding: { xs: '12px 20px', sm: '15px 22px' }, // Adjust padding for responsiveness
        marginTop: '10px',
        fontWeight: 'bold',
        fontSize: { xs: '20px', sm: '25px' }, // Adjust font size for smaller screens
      }}
    >
      Buy Now
    </Button>
  </Box>
</Box>


    </Box>
  );
};

export default VehicleComponent;
