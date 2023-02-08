import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Button, InputLabel } from '@mui/material';
import { SearchComponent } from './SearchComponent';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';




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
    const navigate = useNavigate();
  const adduser=()=>{
    navigate("/register")
  }

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
      <BarChartIcon sx={{marginLeft:2,width:40,color:"blue",height:"70px"}}/>
      <CalendarMonthIcon sx={{marginLeft:1,width:40,color:"blue",height:"80px"}}/>
      <Button onClick={adduser} ><AddCircleIcon sx={{marginLeft:1,width:40,color:"blue",height:"80px"}} /></Button>
      
    </Box>
  );
}