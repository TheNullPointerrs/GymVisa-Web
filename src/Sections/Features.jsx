import React from "react";
import MobileScreen from "../components/MobileScreen";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GradientBall from "../components/ball";

const featuresList = [
    'Multiple gyms under one subscription',
    'Offline videos',
    'Customized Diet Plan from nutritionist',
    'In-app payments',
    'Alerts during rush hours'
];

const Features = () => {
    const theme = useTheme(); 

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: '4em',
                minHeight: '100vh', 
                color: 'white',
            }}
        >
            <GradientBall right='0%'></GradientBall>
            <Box sx={{ flex: 1 }}> 
                <Typography
                    component='h1'
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '2em',
                        mb: '1em', 
                        color:theme.palette.text.secondary
                    }}
                >
                    Features
                </Typography>
                <List 
                    sx={{ 
                        listStyleType: 'disc', 
                        pl: '1.5em',
                    }}
                >
                    {featuresList.map((item) => (
                        <ListItem
                            key={item}
                            disablePadding
                            sx={{
                                color: 'white',
                                display: 'list-item', // Ensures the bullets are displayed
                                '&::marker': {
                                    color: theme.palette.primary.main, // Neon green bullet
                                },
                            }}
                        >
                            <ListItemText primary={item} sx={{ color: 'white' }} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <MobileScreen sx={{ flex: 1 }} /> {/* Ensure MobileScreen is responsive */}
        </Box>
    );
};

export default Features;
