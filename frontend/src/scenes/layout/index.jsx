import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box, useMediaQuery } from '@mui/material';

import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

const Layout = () => {
    const isNonMobile = useMediaQuery('(min-width: 600px)');
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(true);

    return (
        <Box 
            width='100%' 
            height='100%'
            display={ isNonMobile ? 'flex' : 'block' }
        >
            <Sidebar
                isNonMobile={isNonMobile}
                drawerWidth='250px'
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box>
                <Navbar 
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;