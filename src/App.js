import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ContactUsSection from "./Sections/ContactUsSection";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import Dumbbell3D from "./components/dumbbell";

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
      {/* Add the Dumbbell3D component here */}
      <Dumbbell3D
                modelUrl='/assets/model.glb'
            />

      <div
        style={{
          // backgroundColor: theme.palette.background.default,
          padding: "20px",
          minHeight: "100vh",
          overflowX:'hidden',
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar/>
        <Hero/>
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
