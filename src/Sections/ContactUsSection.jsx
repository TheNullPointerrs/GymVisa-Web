// src/Sections/ContactUsSection.js
import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import emailjs from "emailjs-com";
import validator from "validator";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { createTheme } from "@mui/material/styles";

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
});

function ContactUsSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validator.isEmail(email)) {
      setSnackbarMessage("Invalid email address");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    // Send email via EmailJS
    emailjs
      .send(
        "service_inttdlf",
        "template_c9m6k4n",
        {
          name,
          email, // This should be the user's email for reply-to
          message
        },
        "iGWKAAXf0akuDhqzO" // Your user ID
      )
      .then(
        (result) => {
          setSnackbarMessage("Email sent successfully!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
        },
        (error) => {
          setSnackbarMessage("Failed to send email. Please try again later.");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      );
  };

  return (
    <>
      <Grid container spacing={4} style={{ marginTop: "40px" }}>
        <Grid item xs={12} md={4} style={{ paddingRight: "20px" }}>
          <Typography
            variant="h5"
            style={{ color: theme.palette.primary.main }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "#FFFFFF", marginTop: "10px" }}
          >
            Contact for any queries related to subscriptions or any business
            related.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              paddingRight: "20px", // Add right padding here
            }}
            onSubmit={handleEmailSubmit}
          >
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputLabelProps={{
                style: { color: theme.palette.hintText.main },
              }}
              InputProps={{
                style: {
                  color: theme.palette.blackText.primary,
                  backgroundColor: "#FFFFFF",
                },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                style: { color: theme.palette.hintText.main },
              }}
              InputProps={{
                style: {
                  color: theme.palette.blackText.primary,
                  backgroundColor: "#FFFFFF",
                },
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              InputLabelProps={{
                style: { color: theme.palette.hintText.main },
              }}
              InputProps={{
                style: {
                  color: theme.palette.blackText.primary,
                  backgroundColor: "#FFFFFF",
                },
              }}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default ContactUsSection;