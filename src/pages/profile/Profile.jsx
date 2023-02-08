import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './profile.css'
import { Divider } from '@mui/material';
export const Profile = ({handleProfileClose}) => {
  return (
    <div >
      <div className="profilecases">
        <strong >Repair Cases</strong>
        <div onClick={handleProfileClose} style={{cursor:"pointer"}}><CloseIcon/></div>
      </div>
      <Divider/>
    </div>
  )
}
