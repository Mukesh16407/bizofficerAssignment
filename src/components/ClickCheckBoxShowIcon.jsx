import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box } from '@mui/material';

export const ClickCheckBoxShowIcon = () => {
  return (
    <Box sx={{display:"flex"}}>
        <CreateOutlinedIcon sx={{marginLeft:"-30px",width:"40px",color:"blue",height:"30px"}}/>
        <DeleteForeverIcon sx={{marginLeft:"-10px",width:"40px",color:"blue",height:"30px"}}/>
        <ErrorOutlineIcon sx={{marginLeft:"0px",width:"40px",color:"blue",height:"30px"}}/>
    </Box>
  )
}
