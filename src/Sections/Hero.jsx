import React from 'react';
import StoreButton from '../components/StoreButton';
import { Box, Stack, Typography, Container } from '@mui/material';
import GradientBall from '../components/ball';

function Hero() {
    return (
        <Container sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <GradientBall></GradientBall>
            <Stack
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    textAlign: 'center',
                    color: '#fff',
                    padding: '0 20px', 
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        color: 'white',
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, 
                        marginBottom: '0.5rem', 
                    }}
                >
                    Welcome to Gymvisa
                </Typography>
                <Typography
                    variant="h1"
                    component="div"
                    sx={{
                        color: 'white',
                        fontSize: { xs: '1.7rem', sm: '2.3rem', md: '3.5rem' }, 
                        fontWeight: 'bold',
                        lineHeight: 1.2,
                        marginBottom: '2rem', 
                    }}
                >
                    Multiple gyms <br /> One subscription
                </Typography>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        gap: { xs: '10px', md: '20px' },
                        flexDirection: { xs: 'column', sm: 'row' }, 
                    }}
                >
                    <StoreButton store="apple" url="https://apps.apple.com/app/idYOUR_APP_ID" height='50px' />
                    <StoreButton store="google" url="https://play.google.com/store/apps/details?id=YOUR_APP_PACKAGE_NAME" height='70px' />
                </Box>
            </Stack>
        </Container>
    );
}

export default Hero;
