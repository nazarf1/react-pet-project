import React from "react";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";


const Header = ({setIsOpen}) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => setIsOpen(true)}
                    >
                        Add Employee</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header