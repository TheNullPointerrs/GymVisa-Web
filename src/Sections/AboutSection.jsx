import React, { useState, useEffect, useRef } from "react";
import { Typography, Box, Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useSpring, animated } from '@react-spring/web';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const fetchGyms = async () => {
  const gymRef = collection(db, "Gyms");
  const snapshot = await getDocs(gymRef);
  const gymList = snapshot.docs.map((doc) => doc.data());
  return gymList;
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#B3FF11",
    },
    secondary: {
      main: "#1A1A1A",
    },
    background: {
      default: "#000000",
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
  typography: {
    h2: {
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    body1: {
      fontSize: '1.2rem',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
});

function Number({ n, trigger }) {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: trigger ? n : 0 },
    delay: 200,
    config: { mass: 5, tension: 500, friction: 200 },
  });
  return (
    <animated.h1
      style={{ color: theme.palette.primary.main, fontSize: "3rem" }}
    >
      {number.to((n) => Math.round(n))}
    </animated.h1>
  );
  
}

function GymSlider({ gymList, handlePrev, handleNext }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentGym = gymList[currentIndex];

  return (
    <Container
      id="gyms"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "60px",
      }}
    >
      {/* Left arrow */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handlePrev}
          className="prev-button"
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "3rem",
            color: "white",
            '@media (max-width: 600px)': {
              fontSize: '2.5rem', // Adjust size for smaller screens
            },
          }}
        >
          &lt;
        </button>
      </Box>

      <Box
        className="gym-slider"
        sx={{
          width: { xs: "70%", md: "500px" },
          textAlign: "center",
          paddingX: { xs: 2, sm: 0 },
          fontSize: {
            xs: '0.9rem', // Smaller font size for smaller screens
            sm: '1rem',
            md: '1.2rem',
          },
        }}
      >
        <h4 style={{ fontWeight: "100", fontSize: "1rem" }}>
          {currentGym.subscription}
        </h4>
        <h2
          style={{
            color: theme.palette.primary.secondary,
            fontSize: "2rem",
            wordWrap: "break-word",
            '@media (max-width: 600px)': {
              fontSize: '1.5rem', // Adjust size for smaller screens
            },
          }}
        >
          {currentGym.name}
        </h2>
        <p style={{ color: theme.palette.primary.main, fontSize: "1rem" }}>
          {currentGym.address}
        </p>
      </Box>

      {/* Right arrow */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleNext}
          className="next-button"
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "3rem",
            color: "white",
            '@media (max-width: 600px)': {
              fontSize: '2.5rem', // Adjust size for smaller screens
            },
          }}
        >
          &gt;
        </button>
      </Box>
    </Container>
  );
}


function AboutSection() {
  const [gyms, setGyms] = useState([]);
  const [standardGymCount, setStandardGymCount] = useState(0);
  const [premiumGymCount, setPremiumGymCount] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const getGyms = async () => {
      const gymList = await fetchGyms();
      setGyms(gymList);
      const standardGyms = gymList.filter(
        (gym) => gym.subscription === "Standard"
      );
      setStandardGymCount(standardGyms.length);
      const premiumGyms = gymList.filter(
        (gym) => gym.subscription === "Premium"
      );
      setPremiumGymCount(premiumGyms.length);
    };
    getGyms();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const [text] = useTypewriter({
    words: ['Discounts.'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <Container id='about'>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          paddingBottom: "40px",
          fontWeight: 600,
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '2.5rem',
            lg: '4rem'
          }
        }}
        color="primary"
      >
        About
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          fontSize: {
            xs: '1rem',
            sm: '1.2rem',
            md: '1.3rem',
            lg: '1.5rem'
          }
        }}
        color="whiteText"
      >
        Gym Visa is a mobile app, designed to offer users access to multiple gyms under various
        subscription packages. Users can purchase these packages through the
        in-app payment gateway. Additionally, the app provides offline exercise
        videos for full-body workouts and allows users to request diet plans
        from different nutritionists. Subscribed users can visit gyms by
        scanning the provided QR code and enjoy their fitness journey.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-evenly",
          paddingTop: "60px",
        }}
        ref={counterRef}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Number n={standardGymCount} trigger={trigger} />
          <Typography variant="h5">Standard Gyms</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Number n={premiumGymCount} trigger={trigger} />
          <Typography variant="h5">Premium Gyms</Typography>
        </Box>
      </Box>
      {gyms.length > 0 && (
        <GymSlider
          gymList={gyms}
          handlePrev={() => setGyms(prev => [...prev.slice(-1), ...prev.slice(0, -1)])}
          handleNext={() => setGyms(prev => [...prev.slice(1), prev[0]])}
        />
      )}

      <Box sx={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Typography variant="h6">Coming Soon</Typography>
        <Typography
          variant="h1"
          sx={{
            color: "black",
            fontSize: { xs: "3rem", md: "5rem" },
            margin: "10px 0",
            textShadow: `2px 2px 0 ${theme.palette.primary.main}, -2px -2px 0 ${theme.palette.primary.main}, 2px -2px 0 ${theme.palette.primary.main}, -2px 2px 0 ${theme.palette.primary.main}`,
          }}
        >
          {text}<Cursor />
        </Typography>
        <Typography variant="h6">Get Discounts on Subscriptions and Restaurants</Typography>
      </Box>
    </Container>
  );
}

export default AboutSection;
