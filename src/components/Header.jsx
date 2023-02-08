import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { SecondHeader } from './SecondHeader';
import { Link } from 'react-router-dom';



export  function Header() {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static" sx={{height:"45px", justifyContent:"center"}}>
        <Toolbar sx={{marginLeft:"30px"}}>
        <Link to={"/"}>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2,color:"white", fontSize: "50px"}}
          >
            <MenuIcon />
          </IconButton>
         </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block',fontSize: "16px" } }}
          >
            Cases
          </Typography>
         
        <LogoutIcon sx={{fontSize: "20px"}}/>
        </Toolbar>
      </AppBar>
       <SecondHeader/>
    </Box>
  );
}