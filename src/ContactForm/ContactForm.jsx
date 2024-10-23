import React from 'react';
import { Grid, TextField, Button, Box, Typography } from '@mui/material';
import download from '../ProductImages/download.png'
import D80 from '../assets/exer-img2.png'
const ContactForm = () => {

  // Function to trigger PDF download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/brochure.pdf'; // Replace with actual path to your PDF
    link.setAttribute('download', 'Brochure.pdf'); // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* Heading Section */}
      <Typography variant="h4" align="center" gutterBottom className="form-heading" sx={{fontWeight:'bold'}}>
        ARE YOU INTERESTED TO OWN EXER MOBILITY E-SCOOTER?
      </Typography>

      {/* Responsive Grid Container */}
      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <img
            src={D80} // Replace with actual image URL
            alt="E-Scooter"
            className="form-image"
            style={{ width: '80%',height:'90vh', borderRadius: '10px',
             }} // Styling for responsiveness
          />
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Box className="form-container" sx={{ padding: '30px', backgroundColor: '#f8faff', borderRadius: '10px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  className="form-field"
                  InputProps={{
                    disableUnderline: true,
                    style: { 
                      border: 'none',
                      backgroundColor: '#f1f1f1',
                      padding: '8px 15px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Pincode"
                  variant="outlined"
                  fullWidth
                  required
                  className="form-field"
                  InputProps={{
                    disableUnderline: true,
                    style: { 
                      border: 'none',
                      backgroundColor: '#f1f1f1',
                      padding: '8px 15px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  className="form-field"
                  InputProps={{
                    disableUnderline: true,
                    style: { 
                      border: 'none',
                      backgroundColor: '#f1f1f1',
                      padding: '8px 15px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="State"
                  variant="outlined"
                  fullWidth
                  required
                  className="form-field"
                  InputProps={{
                    disableUnderline: true,
                    style: { 
                      border: 'none',
                      backgroundColor: '#f1f1f1',
                      padding: '8px 15px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mobile"
                  variant="outlined"
                  fullWidth
                  required
                  className="form-field"
                  InputProps={{
                    disableUnderline: true,
                    style: { 
                      border: 'none',
                      backgroundColor: '#f1f1f1',
                      padding: '8px 15px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="City"
                  variant="outlined"
                  fullWidth
                  required
                  className="form-field"
                  InputProps={{
                    disableUnderline: true,
                    style: { 
                      border: 'none',
                      backgroundColor: '#f1f1f1',
                      padding: '8px 15px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                    },
                  }}
                />
              </Grid>

              {/* Placeholder for CAPTCHA */}
              {/* <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                  <div>
                    <Typography>CAPTCHA Goes Here</Typography> 
                  </div>
                </Box>
              </Grid> */}

              {/* Download Button */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  className="form-button"
                  onClick={handleDownload}
                  sx={{ 
                    backgroundColor: '#000', 
                    color: '#00cc44',
                    fontSize:'18px', 
                    fontWeight:'600',
                    borderRadius: '20px', // Left and right border-radius
                    padding: '5px 20px',   // Make the button smaller
                    '&:hover': { backgroundColor: '#333' } 
                  }}
                >
                  <img
                    src={download}
                    alt="Download Icon"
                    style={{ width: '20px', marginRight: '10px', }} // Example icon
                  />
                  Download Brochure
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
