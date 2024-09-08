import React from "react";
import MobileScreen from "../components/MobileScreen";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
        <Box id="user-guide"
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Column layout on small screens and row layout on medium and larger screens
                justifyContent: 'space-between', // Center content on smaller screens
                alignItems: 'center',
                p: '4em',
                minHeight: '100vh',
                color: 'white',
            }}
        >
            <Box sx={{ flex: 1, mb: { xs: '2em', md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                    component='h1'
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1.5em', md: '2em' }, // Adjust font size for smaller screens
                        mb: '1em',
                        color: theme.palette.text.secondary
                    }}
                >
                    Features
                </Typography>
                <List 
                    sx={{ 
                        listStyleType: 'disc', 
                        pl: { xs: '1em', md: '1.5em' }, // Adjust padding for smaller screens
                        textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
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

            <Box sx={{ 



             }}>
                <MobileScreen /> {/* Ensure MobileScreen is responsive */}
            </Box>
        </Box>
    );
};

export default Features;
