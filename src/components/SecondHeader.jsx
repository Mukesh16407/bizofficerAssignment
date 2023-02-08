import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Button, InputLabel, Modal, Paper} from '@mui/material';
import { SearchComponent } from './SearchComponent';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import { Register } from '../pages/register/Register';





const channels = [
 "All Channels",
 "Primary",
 "Secondary"
];

const caseType=[
    "All Case Type"
];
const allStatus =[
    "All Status"
]
const allCases=[
    "All Cases",
    "Open Cases",
    "Closed Cases",
    "Resolved Cases",
    "Billable cases",
    "Open Package Cases",
    "Emergency Cases",
    "Unassigned Cases",
    "Unassigned Package cases",
    "Overdue Cases",
    "Cases Due Today",
    "Cases Due Tomorrow",
    "Cases Next 7 days"
]

export function SecondHeader() {
    
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{display:"flex",alignItems:"center",height:"40px",marginTop:"5px"}}>
      <FormControl  sx={{height:"inherit",width:"150px",marginLeft:"10px"}}>
      <InputLabel id="demo-multiple-name-label">All Channels</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          input={<OutlinedInput label="Name" />}
          sx={{height:"100%"}}
          
        >
          {channels.map((name) => (
            <MenuItem 
              key={name}
              value={name}   
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl  sx={{height:"inherit",width:"150px",marginLeft:"5px"}}>
      <InputLabel id="demo-multiple-name-label">All Cases Type</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          input={<OutlinedInput label="Name" />}
          sx={{height:"100%"}}
          
        >
          {caseType.map((name) => (
            <MenuItem
              key={name}
              value={name}
              
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{height:"inherit",width:"150px",marginLeft:"5px"}}>
      <InputLabel id="demo-multiple-name-label">All Status</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          input={<OutlinedInput label="Name" />}
          sx={{height:"100%"}}
          
        >
          {allStatus.map((name) => (
            <MenuItem
              key={name}
              value={name}
              
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{height:"inherit",width:"150px",marginLeft:"5px"}}>
      <InputLabel id="demo-multiple-name-label">All Cases</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          input={<OutlinedInput label="Name" />}
          sx={{height:"100%"}}
          
        >
          {allCases.map((name) => (
            <MenuItem
              key={name}
              value={name}
              
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <SearchComponent sx={{height:"inherit",width:"150px",marginLeft:"5px"}}/>
      <BarChartIcon sx={{marginLeft:"5px",width:"40px",color:"blue",height:"30px"}}/>
      <CalendarMonthIcon sx={{marginLeft:"-10px",width:"40px",color:"blue",height:"30px"}}/>
      <Button onClick={handleOpen}><AddCircleIcon sx={{marginLeft:"-30px",width:"40px",color:"blue",height:"30px"}} /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={{width:"60%", marginTop:"100px", marginLeft:"15%",overflowY:"scroll",height:"85vh", overflowX:"hidden"}}>
        <Register handleClose={handleClose}/>

        </Paper>
      </Modal>
      
    </Box>
  );
}