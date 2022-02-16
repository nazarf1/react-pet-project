import React from "react";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {openModal} from "../actions/modalActions";

const Header = () => {
    const dispatch = useDispatch()
    function handleOpen () {
        dispatch(openModal())
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={handleOpen}
                    >
                        Add Employee</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header