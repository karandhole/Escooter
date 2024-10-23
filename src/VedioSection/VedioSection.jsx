import React from 'react';
import { Grid, Box } from '@mui/material';
import vdo1 from '../assets/vdo1.mp4';
import vdo2 from '../assets/vdo2.mp4';
import vdo7 from '../assets/vdo7.mp4';

const videos = [vdo1, vdo2, vdo7];

const VedioSection = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {videos.map((video, index) => (
          <Grid 
            item 
            xs={12}  // Full width on extra small screens
            sm={6}   // Two videos per row on small screens
            md={4}   // Three videos per row on medium and larger screens
            key={index}
          >
            <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <video
                src={video}
                autoPlay
                loop
                muted
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'black',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VedioSection;
