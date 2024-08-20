// src/App.js
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ContactUsSection from "./Sections/ContactUsSection";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B3FF11", // Background and text color Neon Green
    },
    secondary: {
      main: "#1A1A1A", // Background color only Gray
    },
    background: {
      default: "#000000", // Black background
      paper: "#1A1A1A", // Secondary background Gray
    },
    blackText: {
      primary: "#000000", // Black text
    },
    whiteText: {
      primary: "#FFFFFF", // White text
    },
    hintText: {
      main: "#A9A9A9",
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    allVariants: {
      color: "#B3FF11", // Neon green
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: theme.palette.background.default,
          padding: "20px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Typography variant="h4">Welcome to My Custom Themed App</Typography>
          <Button variant="contained" color="primary">
            Primary Button
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ color: theme.palette.blackText.primary }}
          >
            Secondary Button
          </Button>
        </div>

        {/* Contact Us Section */}
        <ContactUsSection />

        {/* Email Section */}
        <div
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            style={{
              color: "white",
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            marhabaemaan@gmail.com
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
