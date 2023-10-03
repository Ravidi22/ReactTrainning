import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function NavBar(){

    const [cartAmount, setCartAmount] = useState(0);

    return(
        <AppBar position= "sticky" sx={{ width: '100vw' }}>
        <Toolbar sx={{direction:"rtl",flexDirection:"row",justifyContent:"space-between"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            סכום כולל: -----
          </Typography>
        <Badge sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          margin: '20px',
        }}
        badgeContent={cartAmount}
        color="warning"
        >
          <ShoppingCartIcon color="action" />
        </Badge>
        </Toolbar>
      </AppBar>
    )
}