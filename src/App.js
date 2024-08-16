import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B3FF11', // Background and text color Neon Green
    },
    secondary: {
      main: '#1A1A1A', // Background color only Gray
    },
    background: {
      default: '#000000', // Black background
      paper: '#1A1A1A',   // Secondary background Gray
    },
    text: {
      primary: '#FFFFFF', // White text
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', 
    allVariants: {
      color: '#B3FF11', //Neon green
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.background.default, padding: '20px' }}>
        <Typography variant="h4">
          Welcome to My Custom Themed App
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary" style={{ color: theme.palette.text.primary }}>
          Secondary Button
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
