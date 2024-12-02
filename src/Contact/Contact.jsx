import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import {
    Box,
    TextField,
    Typography,
    Button,
    Grid,
    IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(
                'service_pern4qr', // Replace with your EmailJS Service ID
                'template_3l668ze', // Replace with your EmailJS Template ID
                formData,
                'PVSmNzDFhbhSB9RPQ' // Replace with your EmailJS User ID
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error);
                    alert('Failed to send the message, please try again.');
                }
            );
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear the form
    };

    return (
        <Box sx={{ backgroundColor: 'aliceblue', }}>
            <Box
                sx={{
                    padding: '20px',
                    paddingBottom: '40px',
                    maxWidth: '1000px',
                    margin: 'auto',
                    backgroundColor: 'aliceblue',
                }}
            >
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                Please Feel Free to Contact Us
                <Box
  sx={{
    width: '35%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto', // Center the box horizontally
  }}
>
  <LinearProgress
    sx={{
      width: '100%',
      backgroundColor: '#12a632', // Light grey background for the bar
      '& .MuiLinearProgress-bar': {
        backgroundColor: 'green', // Green color for the progress
      },
    }}
  />
</Box>


                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4} direction={{ xs: 'column', md: 'row' }}>

                        {/* Form Section */}
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2} alignItems="flex-end">
                                <Grid item xs={1}>
                                    <IconButton disabled>
                                        <PersonIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        variant="outlined"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={1}>
                                    <IconButton disabled>
                                        <EmailIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        name="email"
                                        variant="outlined"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={1}>
                                    <IconButton disabled>
                                        <PhoneIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        fullWidth
                                        label="Mobile Number"
                                        type="tel"
                                        name="phone"
                                        variant="outlined"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={1}>
                                    <IconButton disabled>
                                        <MessageIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        multiline
                                        rows={4}
                                        name="message"
                                        variant="outlined"
                                        
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>

                            {/* Submit Button */}
                            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                                <Button variant="contained" color="primary" type="submit">
                                    Submit
                                </Button>
                            </Box>
                        </Grid>

                        {/* Map Section */}
                        <Grid item xs={12} md={6}>
                            <Box sx={{ height: '100%', width: '100%', minHeight: '300px', marginTop: '20px' }}>
                                <iframe
                                    title="Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.445187945385!2d73.77662707496488!3d18.59903548250983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90012d55835%3A0x3ec2450d7f489ba4!2sExerval%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1731302876856!5m2!1sen!2sin"
                                    width="100%"
                                    height="300px" // Make map smaller
                                    style={{ border: '0' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    );
};

export default Contact;
