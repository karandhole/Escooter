import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme, useMediaQuery } from '@mui/material';

const FAQ = () => {
  const theme = useTheme();
  
  // Media query for responsiveness
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  // Small devices (mobile)
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));  // Medium devices (tablet)

  const faqs = [
    {
      question: 'How long does a full charge last on the E-scooter?',
      answer: 'A full charge typically lasts between 25 to 40 kilometers, depending on riding conditions, rider weight, and the E-scooter model.',
    },
    {
      question: 'What is the motor power of the E-scooter?',
      answer: 'The E-scooter is equipped with a powerful 250W brushless motor, allowing for smooth acceleration and efficient performance.',
    },
    {
      question: 'What happens if the weight limit is exceeded?',
      answer: 'Exceeding the weight limit can affect the E-scooter’s performance, stability, and braking ability, and may lead to damage or safety hazards.',
    },
    {
      question: 'What is the average speed during normal use?',
      answer: 'Under typical conditions, riders usually maintain an average speed of around 15-20 km/h, depending on their riding style and environment.',
    },
    {
      question: 'Are there specific local regulations for riding E-scooters?',
      answer: 'Yes, local regulations can vary significantly, including speed limits, where you can ride, and helmet laws. It essential to check your local laws before riding.',
    },
  ];

  return (
    <Grid container justifyContent="center" sx={{ padding: isMobile ? '10px' : '20px' }}>
      <Grid item xs={12} justifyContent="center">
        {/* Responsive Typography */}
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ 
            fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem',
            fontWeight: 'bold',
            marginBottom: '30px',
          }}
        >
          FREQUENTLY ASKED QUESTIONS
        </Typography>

        {/* Full-Width Accordion Boxes */}
        {faqs.map((faq, index) => (
          <Box
            key={index}
            sx={{
              marginBottom: '20px', // Add spacing between FAQs
              width: '100%', // Set width to 100% for all screen sizes
            }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography sx={{ fontSize: isMobile ? '1.5rem' : isTablet ? '1.5rem' : '1.4rem', fontWeight:'600' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: isMobile ? '0.875rem' : isTablet ? '1rem' : '1.25rem' }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default FAQ;
