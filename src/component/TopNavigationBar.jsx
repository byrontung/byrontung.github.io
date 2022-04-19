import {
    AppBar,
    Container,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Button,
    Box,
    Grid,
} from "@mui/material";
import React from "react";

const pages = ["Home", "About", "Projects"];

function TopNavigationBar() {
    return (
        <>
            <AppBar position="absolute">
                <Toolbar>
                    <Typography variant="h5" sx={{px: 3}}>Byron Tung</Typography>
                    {pages.map((page) => (
                        <Button key={page} color="inherit" style={{textTransform: 'none'}}>
                            <Typography>{page}</Typography>
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default TopNavigationBar;
