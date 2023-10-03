
import './App.css'
import PageTabs from './componenet/PageTabs';
import NavBar from './componenet/NavBar';
import * as React from 'react';
import Box from '@mui/material/Box';


function App() {
  return ( 
    <Box style={{ display: 'flex',flexDirection:'column',justifyContent:'flex-start', alignItems: 'end' }}>
      <NavBar/>
      <PageTabs/>
    </Box>
  )
}

export default App
