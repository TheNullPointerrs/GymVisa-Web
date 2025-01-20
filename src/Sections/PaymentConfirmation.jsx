import React from 'react';
import Lottie from 'react-lottie';
import { Typography, Box, Container, Button, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#B3FF11",
    },
    secondary: {
      main: "#1A1A1A",
    },
    background: {
      default: "#1A1A1A",
      paper: "#1A1A1A",
    },
    blackText: {
      primary: "#000000",
    },
    whiteText: {
      primary: "#FFFFFF",
    },
    hintText: {
      main: "#A9A9A9",
    },
  },
});

const PaymentConfirmation = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/Fitness.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          maxWidth="xs"
          sx={{
            backgroundColor: theme.palette.background.paper,
            padding: '2rem',
            borderRadius: '10px',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '150px', 
              mb: 3,
            }}
          >
            <Lottie options={defaultOptions} height={150} width={150} />
          </Box>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.whiteText.primary,
              fontSize: isSmallScreen ? '1.8rem' : '2.5rem',
              mb: 6, 
            }}
          >
            Welcome to the Gym Visa Club! 🎉
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.whiteText.primary,
              mt: 2,
              fontSize: isSmallScreen ? '1rem' : '1.2rem',
            }}
          >
            ✅ Your payment was successful! Your subscription has been activated immediately. Now, you have access to multiple gyms under your subscription. 
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.whiteText.primary,
              mt: 3,
              fontSize: isSmallScreen ? '1rem' : '1.2rem',
            }}
          >
            💪 "Get ready to transform your fitness journey with unlimited access to gyms across the city!"
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.whiteText.primary,
              mt: 2,
              fontSize: isSmallScreen ? '1rem' : '1.2rem',
            }}
          >
            🎯 "Consistency is key, and you're one step closer to achieving your fitness goals!"
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => window.history.back()}
              sx={{ textTransform: 'none', fontSize: isSmallScreen ? '0.8rem' : '1rem', padding: '0.8rem' }}
            >
              ↩️ Please return to your app by clicking the arrow on the top left corner.
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PaymentConfirmation;