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

const CardTitle = styled('h2')(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#B3FF11',
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

const CardFooter = styled('p')(({ theme }) => ({
  fontSize: '14px',
  color: '#B3FF11',
  marginTop: '20px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '13px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '14px',
  },
}));

const Card = ({ amount, name, description, footer }) => {
  return (
    <CardContainer id="plans">
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
