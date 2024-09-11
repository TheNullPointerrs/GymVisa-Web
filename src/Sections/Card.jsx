import React from 'react';
import { styled } from '@mui/system';

const CardContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#1A1A1A',
  borderRadius: '20px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  paddingTop: '50px',
  paddingBottom: '50px',
  width: '300px',
  margin: '20px auto',

  [theme.breakpoints.down('sm')]: {
    width: '70%',
  },
  [theme.breakpoints.up('md')]: {
    width: '250px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '300px',
  },
}));

const CardHeader = styled('div')({
  textAlign: 'center',
});

const CardTitle = styled('div')(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: '10px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '24px',
  },
}));

const OriginalPrice = styled('div')({
  position: 'relative',
  color: '#D3D3D3', // Light gray color for original price
  fontSize: '18px', // Smaller size for strikethrough price
  marginBottom: '5px', // Space between original and actual prices

  // Pseudo-element for red strikethrough line
  '& span': {
    position: 'relative',
    display: 'inline-block',
  },
  
  '& span::before': {
    content: '""',
    position: 'absolute',
    left: '0',
    right: '0',
    top: '50%',
    borderTop: '2px solid red', // Red strikethrough line
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
});

const ActualPrice = styled('div')({
  color: '#B3FF11', // Neon color for actual price
  fontSize: '26px', // Larger size for actual price
  fontWeight: 'bold',
});

const CardSubtitle = styled('h3')(({ theme }) => ({
  fontSize: '18px',
  color: '#FFFFFF',
  marginBottom: '20px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '17px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
  },
}));

const CardBody = styled('div')(({ theme }) => ({
  textAlign: 'center',
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#FFFFFF',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '16px',
  },
}));

const Card = ({ originalPrice, amount, name, description}) => {
  return (
    <CardContainer id="plans">
      <CardHeader>
        <CardTitle>
          <OriginalPrice>
            <span>{originalPrice} Rs/-</span> {/* Wrap the original price text */}
          </OriginalPrice>
          <ActualPrice>{amount} Rs/-</ActualPrice> {/* Firebase price in neon color */}
        </CardTitle>
        <CardSubtitle>{name}</CardSubtitle>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
