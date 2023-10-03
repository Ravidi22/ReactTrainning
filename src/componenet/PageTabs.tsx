import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import { useState } from 'react';
import HomePage from '../pages/HomePage';
import ShoppingCartPage from '../pages/ShoppingCartPage';

export default function PageTabs(){
    
  const [pageIndex, setPageIndex] = useState('home');


  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setPageIndex(newValue);
  };
    return(
      <TabContext value={pageIndex}>
        <Box sx={{ borderBottom: 1 }}>
          <TabList onChange={handleTabChange}>
            <Tab icon={<ShoppingCartIcon />} aria-label="shoppingCart" />
            <Tab icon={<HomeIcon />} aria-label="home" />
          </TabList>
        </Box>
        <TabPanel key={"home"} value="home">
            <HomePage/>
        </TabPanel>
        <TabPanel key={"shoppingCart"} value="shoppingCart">
            <ShoppingCartPage/>
        </TabPanel>
      </TabContext>
    )
}