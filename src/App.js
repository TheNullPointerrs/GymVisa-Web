import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ContactUsSection from "./Sections/ContactUsSection";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import Dumbbell3D from "./components/dumbbell";
import Footer from "./components/Footer";
import Features from "./Sections/Features";
import AboutSection from "./Sections/AboutSection";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B3FF11", // Neon Green
    },
    secondary: {
      main: "#1A1A1A", // Gray background
    },
    background: {
      default: "#000000", // Black background
      paper: "#1A1A1A", // Secondary background Gray
    },
    text: {
      primary: "#FFFFFF", // Default white text
      secondary: "#B3FF11", // Neon green text
    },
    hintText: {
      main: "#A9A9A9", // Hint text color
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    allVariants: {
      color: "#FFFFFF", // Default to white text
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dumbbell3D
                modelUrl='/assets/model.glb'
            />

      <div
        style={{
          padding: "20px",
          minHeight: "100vh",
          overflowX:'hidden',
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar/>
        <Hero/>
        <AboutSection/>
        <Features/>
        <ContactUsSection />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
