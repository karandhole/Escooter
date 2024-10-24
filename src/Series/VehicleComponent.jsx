import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import battery from '../../src/ProductImages/battery.png';
import charger from '../../src/ProductImages/charger.png';
import motor from '../../src/ProductImages/motor.png';
import speed from '../../src/ProductImages/speed.png';
import v1 from '../../src/website product/V80 red.png'
import v2 from '../../src/website product/V80WHITE.png';
import v3 from  '../../src/website product/V150 white.png'
import g1 from '../../src/website product/G80silver.png';
import g2 from '../../src/website product/G80white.png';
import g3 from '../../src/website product/G150 silver.png'
import z1 from '../../src/website product/Z80RED.png';
import z2 from '../../src/website product/Z80WHITE.JPG';
import d1 from '../../src/website product/D80 red.png';
import d2 from '../../src/website product/D80 white.png';
import d3 from '../../src/website product/D80 blue.png';
import d4 from '../../src/website product/D80 black.png';
import y1 from '../../src/website product/Y80silver.jpeg';
import y2 from '../../src/website product/Y80 white.png';
import p1 from '../../src/website product/P80 red.jpeg';
import c1 from '../../src/assets/C-Yellow (1).png';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


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
      battery: { text: 'Lead Acid / Lithium ion 60V 30AH', img: battery },
      topspeed: { text: '25KMPH', img: speed },
      charger: { text: '60V 30Amp 5-6Hrs', img: charger },
      
    },
    G80: {
      motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
      battery: { text: 'Lead Acid / Lithium ion 60V 30AH', img: battery },
      topspeed: { text: '25KMPH', img: speed },
      charger: { text: '60V 30Amp 5-6Hrs', img: charger },
    },
    Z80: {
        motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
        battery: { text: 'Lead Acid / Lithium ion 60V 30AH', img: battery },
        topspeed: { text: '25KMPH', img: speed },
        charger: { text: '60V 30Amp 5-6Hrs', img: charger },
       
      },
    D80: {
        motor: { text: 'BLDC Motor with 18 Months Warranty', img: motor },
        battery: { text: 'Lead Acid / Lithium ion 60V 30AH', img: battery },
       topspeed: { text: '25KMPH', img: speed },
       charger: { text: '60V 30Amp 5-6Hrs', img: charger },
        
      },
      Y80: {
        motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
        battery: { text: 'Lead Acid / Lithium ion 60V 30AH', img: battery },
        topspeed: { text: '25KMPH', img: speed},
        charger: { text: '60V 30Amp 5-6Hrs', img: charger },
      
      },
      P80: {
        motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
        battery: { text: 'Lead Acid / Lithium ion 60V 30AH', img: battery },
        topspeed: { text: '25KMPH', img: speed },
        charger: { text: '60V 30Amp 5-6Hrs', img: charger },
        
      },
    V150: {
      motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
      battery: { text: 'Lead Acid / Lithium ion 60V 30AH', img: battery },
      topspeed: { text: '55KMPH', img: speed },
      charger: { text: '60V 30Amp 5-6Hrs', img: charger },
      
    },
    G150: {
      motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
      battery: { text: 'Lead Acid / Lithium ion 60V 30AH', img: battery },
      topspeed: { text: '50KMPH', img: speed },
      charger: { text: '60V 30Amp 5-6Hrs', img: charger },
      
    },
    C80_CARGO: {
        motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
        battery: { text: 'Lead Acid / Lithium ion 60V 30AH', img: battery },
        topspeed: { text: '25KMPH', img: speed },
        charger: { text: '60V 30Amp 5-6Hrs', img: charger },
      
    },
    METAL_CARGO_2W: {
        motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
        battery: { text: 'Lead Acid / Lithium ion 60V 30AH', img: battery },
        topspeed: { text: '25KMPH', img: speed },
        charger: { text: '60V 30Amp 5-6Hrs', img: charger },
      
    },
    METAL_CARGO_3W: {
        motor: { text: 'BLDC Motor with 12 Months Warranty', img: motor },
        battery: { text: 'Lead Acid / Lithium ion 60V 30AH', img: battery },
        topspeed: { text: '25KMPH', img: speed },
        charger: { text: '60V 30Amp 5-6Hrs', img: charger },
     
    },
  };

  const priceData = {
   
      V80: { Leadacid: 'MRP ₹57,999* /-', Lithium: 'MRP ₹72,999* /-' },
      G80: { Leadacid: 'MRP ₹56,999* /-', Lithium: 'MRP ₹71,999* /-' },
      Z80: { Leadacid: 'MRP ₹49,999* /-', Lithium: 'MRP ₹69,999* /-' },
      D80: { Leadacid: 'MRP ₹51,999* /-', Lithium: 'MRP ₹71,999* /-' },
      Y80: { Leadacid: 'MRP ₹56,999* /-', Lithium: 'MRP ₹76,999* /-' },
      P80: { Leadacid: 'MRP ₹62,999* /-', Lithium: 'MRP ₹77,999* /-' },
      V150: { },
      G150: {  },
      C80_CARGO: { Lithium: 'MRP ₹72,999* /-' },
      METAL_CARGO_2W: { Leadacid: 'MRP ₹59,999* /-', Lithium: 'MRP ₹74,999* /-' },
      METAL_CARGO_3W: { Leadacid: 'MRP ₹66,999* /-', Lithium: 'MRP ₹81,999* /-' },
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
     
      White: v3,
    },
    G150:{
      Silver: g3
     
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
          hight:'100px',
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
              backgroundColor: selectedSeries === series ? 'orange' : 'lightgray',
              color: 'black',
              padding: { xs: '10px 30px', sm: '20px 50px' }, // Responsive padding
              margin: '0 10px',
             
              boxShadow: 3,
              borderRadius: '8px',
              fontSize: { xs: '18px', sm: '18px' }, // Responsive font size
              fontWeight: selectedSeries === series ? '900' : '500',
              
            }}
          >
             {/* Display corresponding icon based on series */}
             {series === 'ACTIVE' && <DirectionsBikeIcon sx={{ marginRight: '8px' }} />}
            {series === 'SPEED' && <SpeedIcon sx={{ marginRight: '8px' }} />}
            {series === 'CARGO' && <LocalShippingIcon sx={{ marginRight: '8px' }} />}
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
              backgroundColor: selectedSubSeries === subSeries ? 'orange' : 'white',
              color: selectedSubSeries === subSeries ? 'black' : 'black',
              padding: { xs: '8px', sm: '15px' },
              width: { xs: '140px', sm: '200px' }, // Responsive width
              height: '50px',
              borderRadius: '8px',
              fontSize: { xs: '18px', sm: '16px' }, // Responsive font size
              border: 'none',
              fontWeight: selectedSubSeries === subSeries ? '800' : '500',
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

 

   {/* Color Selection */}
   <Box
    sx={{
      width: { xs: '100%', lg: '15%' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px', // Reduced gap between color selection options
      padding: '0px',
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '20px' }}>
      Select Color
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}> {/* Reduced gap */}
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
          <Typography variant="body2" sx={{ fontSize: '16px', fontStyle: 'normal',fontWeight:  selectedColor === color ? 'bold' : 'regular' }}>
            {color}
          </Typography>
          <Box
            sx={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: color.toLowerCase(),
             
            }}
          />
        </Box>
      ))}
    </Box>
  </Box>

  {/* Vehicle Image */}
  <Box
    sx={{
      width: { xs: '100%', lg: '50%' }, // Adjusted width to 50% for the vehicle image
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginY: { xs: '20px', lg: '0' }, // Add space on small screens
    }}
  >
    <img
      src={colorImageMap[selectedSubSeries]?.[selectedColor]}
      alt={`${selectedSubSeries} - ${selectedColor}`}
      style={{ width: '100%', maxWidth: '1300px', height: 'auto' }} // Adjusted for a smaller responsive image
    />
  </Box>

  {/* Specifications */}
  <Box
    sx={{
      width: { xs: '100%', lg: '20%' }, // Reduced width for the specification box
      display: 'flex',
      flexDirection: 'column',
      gap: '10px', // Reduced gap between specification boxes
    }}
  >
    {subSeriesData[selectedSubSeries] &&
      Object.entries(subSeriesData[selectedSubSeries]).map(([key, value]) => (
        <Box
          key={key}
          sx={{
            padding: '15px', // Reduced padding for a more compact layout
            backgroundColor: 'white',
            boxShadow: 3,
            borderRadius: '8px',
            height: '120px', // Reduced height for a more compact layout
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box sx={{ marginRight: '10px' }}>
            <img src={value.img} alt={key} style={{ width: '40px', height: '40px' }} /> {/* Smaller icons */}
          </Box>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '18px' }}> {/* Slightly reduced font size */}
              {key.toUpperCase()}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '13px', fontWeight:'400' }}> {/* Reduced font size */}
              {value.text}
            </Typography>
          </Box>
        </Box>
      ))}
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
    gap: { xs: '10px', sm: '0' }, // Adds gap on small screens
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
        backgroundColor: selectedBattery === 'Leadacid' ? 'orange' : 'grey',
        boxShadow: 3,
        borderRadius: '8px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        width: { xs: '100%', sm: '47%' }, // Full width on small screens
        color: 'black',
        fontSize:{ xs: '14px', sm: '16px' },
        fontWeight: 'bold',
      }}
      onClick={() => setSelectedBattery('Leadacid')}
    >
      LEAD ACID BATTERY
    </Box>
    <Box
      sx={{
        padding: '15px',
        backgroundColor: selectedBattery === 'Lithium Ion' ? 'orange' : 'grey',
        boxShadow: 3,
        borderRadius: '8px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        width: { xs: '100%', sm: '47%' }, // Full width on small screens
        color: 'white',
        fontSize:{ xs: '14px', sm: '16px' },
        fontWeight: 'bold',
      }}
      onClick={() => setSelectedBattery('Lithium Ion')}
    >
      LITHIUM ION BATTERY
    </Box>
  </Box>

  <Box
  sx={{
    backgroundColor: '#e6e4df', // Set background color to gray
    padding: '16px', // Add some padding for aesthetics
    borderRadius: '8px', // Optional: Add rounded corners
    display: 'flex', // Use flexbox to align items in a row
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between',
    gap:'20px' // Space between price and button
  }}
>
  <Typography
    variant="h6"
    sx={{
      fontWeight: 'bold',
      fontSize: { xs: '18px', sm: '28px' }, // Larger font on small screens
    }}
  >
    {selectedBattery === 'Leadacid' ? priceData[selectedSubSeries].Leadacid : priceData[selectedSubSeries].Lithium} 
    <br/>
    <Typography >
    <p>Inclusive of GST</p>
  </Typography>
  </Typography>
 
  <Button
    variant="contained"
    sx={{
      backgroundColor: 'orange',
      color: 'white',
      borderRadius: '8px',
      height: '50px',
      minWidth: '200px', // Adjust width for smaller screens
      padding: { xs: '12px 20px', sm: '15px 22px' }, // Adjust padding for responsiveness
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
