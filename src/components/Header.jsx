import styled from "@emotion/styled";
import { AppBar, Avatar,InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';

import React from "react";
import { Box } from "@mui/system";
import { Badge, Notifications } from "@mui/icons-material";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding: "0px 10px",
  
  width:"40%",
}))
const Icons = styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px",
 
  
}))

export const Header = () => {

  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          TakeBook
        </Typography>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{display:{xs:"block",sm:"none"}}}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <InputBase  placeholder='Search...'/>
          </Search>
          <Icons>
        <Badge badgeContent={4} color="error">
           <MailIcon  />
        </Badge>
        <Badge badgeContent={4} color="error">
           <Notifications />
        </Badge>
        <Avatar 
        sx={{width:30,height:30}} 
        src="data:image/jpeg;base64,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"
       />
        
      </Icons>
      </StyleToolbar>
    </AppBar>
  );
};
