import React, { useState, useEffect, useRef } from "react";
import { Typography, Box, Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useSpring, animated } from "react-spring";
import '../App.css';

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
});

function Number1({ n, trigger }) {
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

function Number2({ n, trigger }) {
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
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "60px",
      }}
    >
      <Box>
        <button
          onClick={handlePrev}
          className="prev-button"
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            color: "white",
          }}
        >
          <span style={{ fontSize: "4rem" }} className="arrow-left">
            &lt;
          </span>
        </button>
      </Box>
      <Box
        className="gym-slider"
        sx={{
          width: "500px",
        }}
      >
        <Box className="gym-info" sx={{ textAlign: "center" }}>
          <h4 style={{ fontWeight: "100" }}>{currentGym.subscription}</h4>
          <h2 style={{ color: theme.palette.primary.secondary }}>
            {currentGym.name}
          </h2>
          <p style={{ color: theme.palette.primary.main }}>
            {currentGym.address}
          </p>
        </Box>
      </Box>
      <Box>
        <button
          onClick={handleNext}
          className="next-button"
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            color: "white",
          }}
        >
          <span style={{ fontSize: "4rem" }} className="arrow-right">
            &gt;
          </span>
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

  const handlePrev = () => {
    setGyms((prevGyms) => {
      const newIndex = prevGyms.length - 1;
      return prevGyms.slice(newIndex).concat(prevGyms.slice(0, newIndex));
    });
  };

  const handleNext = () => {
    setGyms((prevGyms) => {
      const newIndex = 1;
      return prevGyms.slice(newIndex).concat(prevGyms.slice(0, newIndex));
    });
  };

  return (
    <Container>
      <Typography
        variant="h2"
        style={{ textAlign: "center", paddingBottom: "40px", fontWeight: 600 }}
        color="primary"
      >
        About
      </Typography>
      <Typography
        variant="body1"
        style={{ textAlign: "center" }}
        color="whiteText"
      >
        Gym Visa is a Flutter-based mobile app with a backend in Firebase,
        designed to offer users access to multiple gyms under various
        subscription packages. Users can purchase these packages through the
        in-app payment gateway. Additionally, the app provides offline exercise
        videos for full-body workouts and allows users to request diet plans
        from different nutritionists. Subscribed users can visit gyms by
        scanning the provided QR code for verification, while the admin panel
        manages user and gym data based on subscriptions.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: "60px",
        }}
        ref={counterRef}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Number1 n={standardGymCount} trigger={trigger} />
          <h1 className="responsive-heading">Standard Gyms</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Number2 n={premiumGymCount} trigger={trigger} />
          <h1 className="responsive-heading">Premium Gyms</h1>
        </Box>
      </Box>
      {gyms.length > 0 && (
        <GymSlider
          gymList={gyms}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}

      <Box sx={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <h5
          style={{
            fontWeight: "100",
            fontSize: "1.5rem",
            margin: "0 0 10px 0",
          }}
        >
          Coming Soon
        </h5>
        <h1
          style={{
            color: "black",
            fontSize: "6rem",
            margin: "10px 0",
            textShadow: `2px 2px 0 ${theme.palette.primary.main}, -2px -2px 0 ${theme.palette.primary.main}, 2px -2px 0 ${theme.palette.primary.main}, -2px 2px 0 ${theme.palette.primary.main}`,
          }}
        >
          Discounts
        </h1>
        <h6
          style={{
            fontWeight: "100",
            fontSize: "1.5rem",
            margin: "10px 0 0 0",
          }}
        >
          Get Discounts on Subscriptions
        </h6>
      </Box>
    </Container>
  );
}

export default AboutSection;
