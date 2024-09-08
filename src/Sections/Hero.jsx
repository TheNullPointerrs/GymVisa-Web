import React from 'react';
import { Box, Stack, Typography, Container } from '@mui/material';
import GradientBall from '../components/ball';
import Dumbbell3D from '../components/dumbbell';
import { useTheme } from "@mui/material/styles";
import { motion } from 'framer-motion';

function Hero() {
    const theme = useTheme();

    return (
        <Container id= 'home'
        
        sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <Dumbbell3D modelUrl="/assets/model.glb" />
            <GradientBall position={{ bottom: '20px', left: '20px' }} offset='high' />
            <GradientBall position={{ top: '20px', right: '20px' }} offset='low' />
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
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '2rem' }, 
                        marginBottom: '0.5rem', 
                    }}
                >
                    Fitness Freedom
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
        <motion.div
            style={{
                textShadow: '0 0 5px rgba(179, 255, 17, 1)',
                fontSize: '2rem',
                color: theme.palette.primary.main
            }}
            animate={{ textShadow: ['0 0 5px rgba(179, 255, 17, 1)', '0 0 20px rgba(255, 255, 255, 1)', '0 0 5px rgba(255, 255, 255, 0.8)'] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
                        <Typography
                            variant="h4"
                            sx={{
                                color: 'black',
                                fontSize: { xs: '1.3rem', sm: '2.2rem', md: '3.0rem' }, 
                                fontWeight: 'medium',
                                lineHeight: 0.5,
                                marginBottom: '2rem',
                            }}
                            component={motion.div}
                            animate={{ 
                                textShadow: [
                                    '0 0 5px rgba(179, 255, 17, 0.8)', 
                                    '0 0 20px rgba(179, 255, 17, 1)', 
                                    '0 0 5px rgba(179, 255, 17, 0.8)'
                                ]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                        >
                            Coming Soon
                        </Typography>
                    </motion.div>
                    {/* <StoreButton store="apple" url="https://apps.apple.com/app/idYOUR_APP_ID" height='50px' />
                    <StoreButton store="google" url="https://play.google.com/store/apps/details?id=YOUR_APP_PACKAGE_NAME" height='70px' /> */}
                </Box>
            </Stack>
        </Container>
    );
}

export default Hero;
