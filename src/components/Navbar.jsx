import React, { useState } from "react";
import { AppBar, List, ListItem, ListItemButton, Drawer, ListItemText, Toolbar, Typography, Box, Button, CssBaseline, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@mui/material/styles";

const navItems = ['Home', 'About', 'Plans', 'User Guide', 'Contact'];
const drawerWidth = 300;

const Navbar = (props) => {
    const theme = useTheme();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState); // Toggles the state
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: theme.palette.secondary.main, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding sx={{ color: '#fff' }}>
                        <ListItemButton sx={{ textAlign: 'center', color: '#fff' }}>
                            <ListItemText primary={item} sx={{ color: '#fff' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ position: 'relative' }}>
            <CssBaseline />
            <AppBar
                position="stick"
                sx={{
                    bgcolor: theme.palette.secondary.main,
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.4)",
                    borderRadius: 3,
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 , color: theme.palette.text.secondary }}
                    >
                        Gym Visa
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end" // Aligns the menu icon to the right
                        onClick={handleDrawerToggle}
                        sx={{ 
                            ml: 2, 
                            display: { sm: 'none' },
                            border: '2px solid #fff', // Border around the icon
                            borderRadius: '5px', // Rounded corners
                            padding: '4px', // Space between the icon and the border
                        }}
                    >
                        <MenuIcon sx={{ color: theme.palette.text.primary }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    anchor="right" // Positions the drawer on the right side
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        opacity: 0.9,
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};

export default Navbar;
