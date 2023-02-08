import React, { useState } from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Modal, Paper } from '@mui/material';
import { Edit } from '../pages/register/Edit';
import { Profile } from '../pages/profile/Profile';

export const ClickCheckBoxShowIcon = () => {

  const [open, setOpen] = React.useState(false);
  const [profileOpen,setProfileOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleProfileOpen =()=>setProfileOpen(true);
  const handleProfileClose=()=>setProfileOpen(false)

  return (
    <Box sx={{display:"flex"}}>
        <CreateOutlinedIcon sx={{marginLeft:"-20px",width:"40px",color:"blue",height:"30px",cursor:"pointer"}} onClick={handleOpen}/>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={{width:"80%", marginTop:"50px",marginLeft:"10%", overflowY:"scroll",height:"90vh", overflowX:"hidden"}}>
        <Edit handleClose={handleClose}/>

        </Paper>
      </Modal>

        <DeleteForeverIcon sx={{marginLeft:"-10px",width:"40px",color:"blue",height:"30px",cursor:"pointer"}}/>

        <ErrorOutlineIcon sx={{marginLeft:"0px",width:"40px",color:"blue",height:"30px", cursor:"pointer"}} onClick={handleProfileOpen} />
        <Modal
        open={profileOpen}
        onClose={handleProfileClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={{width:"98%", marginTop:"10px",marginLeft:"5px",padding:"10px", overflowY:"scroll",height:"95vh", overflowX:"hidden"}}>
        <Profile handleProfileClose={handleProfileClose}/>

        </Paper>
      </Modal>

    </Box>
  )
}
