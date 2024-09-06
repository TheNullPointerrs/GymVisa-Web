import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ContactUsSection from "./Sections/ContactUsSection";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import Dumbbell3D from "./components/dumbbell";
import Footer from "./components/Footer";
import Features from "./Sections/Features";
import AboutSection from "./Sections/AboutSection";
import Card from "./Sections/Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Grid, Box } from "@mui/material";

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

const fetchSubscriptions = async () => {
  const subscriptionRef = collection(db, "Subscriptions");
  const snapshot = await getDocs(subscriptionRef);
  const subscriptionList = snapshot.docs.map((doc) => doc.data());
  return subscriptionList;
};

function App() {
  const [subscriptionList, setSubscriptionList] = useState([]);

  useEffect(() => {
    const getSubscriptions = async () => {
      const subscriptions = await fetchSubscriptions();
      setSubscriptionList(subscriptions);
    };
    getSubscriptions();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Dumbbell3D modelUrl="/assets/model.glb" />

      <div
        style={{
          padding: "20px",
          minHeight: "100vh",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Hero />
        <Box
          sx={{
            paddingTop: "60px",
            paddingBottom: "100px",
          }}
        >
          {subscriptionList.length > 0 && (
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Card
                  amount={subscriptionList[0].price}
                  name="Standard"
                  description="Achieve your fitness goals without breaking the bank with our Standard Membership, providing access to essential gym amenities at a reasonable price."
                  footer="10+ Gyms registered"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  amount={subscriptionList[1].price}
                  name="Premium"
                  description="Elevate your workout with our premium membership, featuring access to luxury gyms. Enjoy state-of-the-art equipment and explore multiple gyms with one membership."
                  footer="20+ Gyms registered"
                />
              </Grid>
            </Grid>
          )}
        </Box>
        <AboutSection />
        <Features />
        <ContactUsSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
