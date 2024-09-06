import React from 'react';
import { styled } from '@mui/system';

const CardContainer = styled('div')({
  backgroundColor: '#1A1A1A', // Dark gray background
  borderRadius: '10px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  padding: '20px', // Added padding on all sides
  paddingTop: '50px',
  paddingBottom: '50px',
  width: '300px',
  margin: '20px auto',
});

const CardHeader = styled('div')({
  textAlign: 'center',
});

const CardTitle = styled('h2')({
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#B3FF11', // Neon green color for the amount
  marginBottom: '10px',
});

const CardSubtitle = styled('h3')({
  fontSize: '18px',
  color: '#FFFFFF', // White color for the subtitle (Standard/Premium)
  marginBottom: '20px',
});

const CardBody = styled('div')({
  textAlign: 'center',
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#FFFFFF', // White color for the description text
});

const CardFooter = styled('p')({
  fontSize: '14px',
  color: '#B3FF11', // Neon green color for the footer
  marginTop: '20px',
});

const Card = ({ amount, name, description, footer }) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>{amount} Rs/-</CardTitle>
        <CardSubtitle>{name}</CardSubtitle>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
        <CardFooter>{footer}</CardFooter>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
