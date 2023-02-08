import { React, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import "./register.css";
import { Spinner } from "../../components/Spinner";
import dayjs from 'dayjs';


const MenuProps = {
  root: {
    flexGrow: 1,
  },
 
};
const channels = ["Select Cases Channels", "Primary", "Secondary"];
const caseType = ["All Case Type"];
const catagory =[
  "Selected Category",
  "Electrical",
  "Furniture",
  "Home Appliciences",
  "It products",
  "sports"
];

const selectcategory =[
  "select Category from Product list"
]

const brands =[
  "Selected Brand",
  "Bajaj Electricals",
  "BlueStar",
  "Godrej",
  "Hevals",
  "IFB",
  "ONIDA",
  "Orent",
  "Symphony",
  "Voltas"
];

const warranty =[
  "Select",
  "In warranty",
  "Out of Warranty",
  "Extended Warranty",
  "AMC Warranty"
]

const priorityItem =[
  "Normal",
  "High",
  "Emergancy"
]
const selectproblem =[
  "Select Problem"
];

const sources =[
  "select Sources",
  "Partner",
  "Dealer network",
  "Local",
  "Customer",
  "gem Portal customer"
]

const selectRegin =[
  "Select Region"
];
const visibility =[
  "Public",
  "Private"
];

export const Register = () => {
 
  const [inputdata, setInputData] = useState({
  
    acoountName: "",
    contactName:"",
    mobile:"",
    casetitile:"",
    email:"",
    phone:"",
    address:"",
    pinCode:"",
    serialNo:"",
    technician:"",
    model:"",
    invoiceNumber:"",
    quantity:"",
    remarks:"",
    otherDetails:"",
    tags:"",
    agents:""
    
  });
  const [showspin, setShowSpin] = useState(true);
  const [date, setdate] = useState(dayjs('2014-08-18T21:11:54'));
  const [channel,setChannel] = useState("Select Cases Channels")

  const handleChangedate = (newValue) => {
    setdate(newValue);
  };

  const handleChangeChannel =(e)=>{
    setChannel(e.value)
  }
  console.log(channel)
  const setInputValue =(e)=>{
    const { name, value } = e.target;
    
    setInputData({ ...inputdata, [name]: value })
  }

 console.log(inputdata)
  useEffect(()=>{
    setTimeout(() => {
      setShowSpin(false)
    }, 1200)

  },[])
  return (
    <div className="register">
      <p>New Cases</p>
      {
        showspin ? <Spinner/>: <form style={MenuProps.root}>
        <Grid container  sx={{ alignItems: "center" }}>
          <Grid item xs={12}  sm={6} md={6} >
            <TextField
              label="Account Name"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
              }}
              name='acoountName' 
              value={inputdata.acoountName} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12}md={6} sm={6 }>
            <FormControl sx={{ m: 1, width: 500 }}>
              <InputLabel id="demo-multiple-name-label">All Channels</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="All Channels" />}
               
                value={inputdata.channel}
                name="name"
                onChange={setInputValue}
              >
                {channels.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <TextField
              label="Contact Name"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
                
              }}
              name='contactName' 
              value={inputdata.contactName} 
              onChange={setInputValue} 
              
            />
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <FormControl sx={{ m: 1, width: 500 }}>
              <InputLabel id="demo-multiple-name-label">
                All Cases Type
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
               
              >
                {caseType.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <TextField
              label="Mobile"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
              }}
              name='mobile' 
              value={inputdata.mobile} 
              onChange={setInputValue} 
              
            />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <TextField
              label="Case Title"
              variant="outlined"
              inputProps={{
                style: {
                  width: "460px",
                  marginLeft:"20px"
                },
              }}
              name='casetitile' 
              value={inputdata.casetitile} 
              onChange={setInputValue} 
              
            />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
              }}
              name='email' 
              value={inputdata.email} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <FormControl sx={{ m: 1, width: 500 }}>
              <InputLabel id="demo-multiple-name-label">
                All Cases Type
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
               
              >
                {catagory.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}md={6}  sm={6}>
            <TextField
              label="Phone"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
              }}
              name='phone' 
              value={inputdata.phone} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <FormControl sx={{ m: 1, width: 500 }}>
              <InputLabel id="demo-multiple-name-label">
                Select Category from product list
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
               
              >
                {selectcategory.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <TextField
              label="Address"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
              }}
              name='address' 
              value={inputdata.address} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <FormControl sx={{ m: 1, width: 500 }}>
              <InputLabel id="demo-multiple-name-label">
                Select Category from product list
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
               
              >
                {brands.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <TextField
              label="Pin Codes"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
              }}
              name='pinCode' 
              value={inputdata.pinCode} 
              onChange={setInputValue} 
              
            />
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <TextField
              label="Serial No"
              variant="outlined"
              inputProps={{
                style: {
                  width: "485px",
                },
              }}
              name='serialNo' 
              value={inputdata.serialNo} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <TextField
              label="Technician"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
              }}
              name='technician' 
              value={inputdata.technician} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <TextField
              label="Model(Serial Number)"
              variant="outlined"
              inputProps={{
                style: {
                  width: "485px",
                },
              }}
              name='model' 
              value={inputdata.model} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          inputProps={{
            style: {
              width: "465px",
            },
          }}
          value={date}
          onChange={handleChangedate}
        />
      </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <FormControl sx={{ m: 1, width: 510 }}>
              <InputLabel id="demo-multiple-name-label">
               Warranty
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
               
              >
                {warranty.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <FormControl sx={{ m: 1, width: 514 }}>
              <InputLabel id="demo-multiple-name-label">
               priority
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
               
              >
                {priorityItem.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <FormControl sx={{ m: 1, width: 510 }}>
              <InputLabel id="demo-multiple-name-label">
               problem
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
               
              >
                {selectproblem.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <FormControl sx={{ m: 1, width: 510 }}>
              <InputLabel id="demo-multiple-name-label">
               Source
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
               
              >
                {sources.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <FormControl sx={{ m: 1, width: 510 }}>
              <InputLabel id="demo-multiple-name-label">
               Selected Reason
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
               
              >
                {selectRegin.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <TextField
              label="Invoice Number"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
              }}
              name='invoiceNumber' 
              value={inputdata.invoiceNumber} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <TextField
              label="Quantity"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <TextField
              label="Case Remarks"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
              }}
              name='remarks' 
              value={inputdata.remarks} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <TextField
              label="Products Other details"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
              }}
              name='otherDetails' 
              value={inputdata.otherDetails} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12}md={6} sm={6}>
            <TextField
              label="Tags"
              placeholder="Enter tags"
              variant="outlined"
              inputProps={{
                style: {
                  width: "500px",
                },
              }}
              name='tags' 
              value={inputdata.tags} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12}md={6} sm={4} spacing={1}>
            <TextField
              label="Agents"
              placeholder="Tester"
              variant="outlined"
              inputProps={{
                style: {
                  width: "300px",
                },
              }}
              name='agents' 
              value={inputdata.agents} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12}md={6} sm={2}>
            <FormControl sx={{ m: 1, width: 100 }}>
              <InputLabel id="demo-multiple-name-label">
               Visibility
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
               
              >
                {visibility.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}md={12} sm={6} sx={{alignItems:"center"}} >
          <Checkbox sx={{width:"30px",marginRight:1}}  /><span>Billable</span>
          <Checkbox label="Billable"sx={{width:"30px",marginLeft:1}}  /><span>Package Services</span>
          </Grid>
          <Grid item xs={12}md={12}  >
           <Button variant="outlined">CANCEL</Button>
           <Button variant="contained" color="success" sx={{ marginLeft:1}}>Save</Button>
          </Grid>
  
        </Grid>
        </form>
      }
     
     
    </div>
  );
};
