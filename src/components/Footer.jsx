import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import '../App.css'; // Import your CSS file

// Custom Modal component with updated styles
const Modal = ({ open, onClose, title, content }) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        maxWidth: "600px",
        backgroundColor: "#000", // Black background
        borderRadius: "12px", // Rounded edges
        padding: "20px",
        boxShadow: "0px 0px 15px rgba(0, 255, 0, 0.8)", // Neon border
        zIndex: 1000,
        overflow: "hidden", // Hide scrollbar but keep content scrollable
        color: "#FFF", // White text color
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #333",
          paddingBottom: "10px",
          marginBottom: "10px",
        }}
      >
        <Typography variant="h6" style={{ color: "#B3FF11" }}>{title}</Typography>
        <Button onClick={onClose} style={{ color: "#B3FF11" }}>
          Close
        </Button>
      </div>
      <div
        style={{
          maxHeight: "400px", // Adjust as needed
          overflowY: "auto", // Allow vertical scrolling
          scrollbarWidth: "none", // Hide scrollbar in Firefox
          msOverflowStyle: "none", // Hide scrollbar in Internet Explorer and Edge
        }}
      >
        <Typography variant="body1" style={{ whiteSpace: "pre-wrap" }}>
          {content}
        </Typography>
      </div>
    </div>
  );
};

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: "", content: "" });

  const handleClickOpen = (title, content) => {
    setDialogContent({ title, content });
    setOpen(true);
    document.body.classList.add('blurred-background');
  };

  const handleClose = () => {
    setOpen(false);
    document.body.classList.remove('blurred-background');
  };

  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
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
        info@gymvisa.co
      </Button>

      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          variant="text"
          className="footer-button"
          onClick={() =>
            handleClickOpen(
              "Payment Policy",
              "1. Payment Methods: Gym Visa accepts various payment methods, including major credit/debit cards and digital wallets. \n2. Subscription Fees: By subscribing to Gym Visa, you agree to pay the subscription fees specified for your chosen plan. \n3. Billing Cycle: Your subscription will automatically renew at the end of each billing cycle unless you cancel it beforehand. \n4. Failed Payments: If a payment fails, your subscription may be suspended until the payment is successfully processed."
            )
          }
        >
          Payment Policy
        </Button>

        <Button
          variant="text"
          className="footer-button"
          onClick={() =>
            handleClickOpen(
              "Privacy Policy",
              "1. Information Collection: We collect personal information to provide and improve our services. \n2. Use of Information: Your information is used to process transactions and personalize your experience. \n3. Data Security: We implement robust security measures to protect your personal information. \n4. Sharing Information: We do not sell or rent your personal information to third parties. \n5. User Rights: You have the right to access, correct, or delete your personal information."
            )
          }
        >
          Privacy Policy
        </Button>

        <Button
          variant="text"
          className="footer-button"
          onClick={() =>
            handleClickOpen(
              "Refund & Exchange Policy",
              "1. Refunds: No refunds will be issued for monthly or annual subscriptions. \n2. Exchanges: As Gym Visa provides access to digital services, exchanges are not applicable. \n3. Dispute Resolution: If you have a dispute, contact our support team within 30 days."
            )
          }
        >
          Refund & Exchange Policy
        </Button>

        <Button
          variant="text"
          className="footer-button"
          onClick={() =>
            handleClickOpen(
              "FAQs",
              "1. What is Gym Visa? \nGym Visa is a membership platform that provides access to multiple gyms and fitness centers under one subscription. You can choose from any of the two membership plans.\n\n" +
              "2. How do I sign up for Gym Visa? \nYou can sign up by downloading our app from the app store or visiting our website. Once registered, you can select a membership plan and start your fitness journey.\n\n" +
              "3. Which gyms are available on Gym Visa? \nGym Visa partners with a variety of gyms across different locations. You can view a full list of participating gyms within the app or on the website.\n\n" +
              "4. Can I cancel my subscription anytime? \nYes, you can cancel your subscription at any time. However, cancellations will only take effect at the end of your current billing cycle.\n\n" +
              "5. What happens if my payment fails? \nIf a payment fails, your subscription may be suspended. You will be notified and given a grace period to update your payment method.\n\n" +
              "6. How do I change my membership plan? \nYou can upgrade or downgrade your membership plan through the app’s settings. Changes will take effect at the beginning of your next billing cycle.\n\n" +
              "7. Can I share my membership with others? \nNo, Gym Visa memberships are individual and cannot be shared with others.\n\n" +
              "9. What is included in the Premium Membership? \nThe Premium Membership includes access to luxury gyms, state-of-the-art equipment, and more registered gyms.\n\n" +
              "10. Can I visit multiple gyms in one day? \nYou can only scan one gym per day. This policy ensures that you have a focused and meaningful workout experience at each location.\n\n" +
              "11. How do I contact customer support? \nYou can reach out to our customer support team via the app or send an email to info@gymvisa.co for assistance."
            )
          }
        >
          FAQs
        </Button>
      </div>

      {/* Custom Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        title={dialogContent.title}
        content={dialogContent.content}
      />
    </div>
  );
};

export default Footer;
