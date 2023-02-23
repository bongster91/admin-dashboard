import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';

import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
} from '@mui/icons-material';
import { 
    useTheme, 
    AppBar, 
    InputBase,
    Button,
    Box,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
} from '@mui/material';

import FlexBetween from 'components/FlexBetween';
import profileImage from 'assets/popcat-meme.jpeg';

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

    return(
        <AppBar
            sx={{
                position: 'static',
                background: 'none',
                boxShadow: 'none',
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>

                {/* LEFT SIDE */}
                <FlexBetween>
                    <IconButton onClick={() => console.log('open/close sidebar')} >
                        <MenuIcon />
                    </IconButton>

                    <FlexBetween
                        backgroundColor={theme.palette.background.alt}
                        borderRadius='9px'
                        gap='3rem'
                        p='0.1rem 1.5rem'
                    >
                        <InputBase placeholder='Search...' />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>

                {/* RIGHT SIDE */}
                <FlexBetween>
                    <IconButton onClick={() => dispatch(setMode())} >
                        { theme.palette.mode === 'dark' ? (
                            <DarkModeOutlined sx={{ fontSize: '25px' }} />
                        ) : (
                            <LightModeOutlined sx={{ fontSize: '25px' }} />
                        )}
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined sx={{ fontSize: '25px'}} />
                    </IconButton>
                </FlexBetween>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;