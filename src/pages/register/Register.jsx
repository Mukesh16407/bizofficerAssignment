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
import CloseIcon from '@mui/icons-material/Close';


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

export const Register = ({handleClose}) => {
 
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
  

  const handleChangedate = (newValue) => {
    setdate(newValue);
  };

 
 
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
      <div className="newcases">
        <div>New Cases</div>
        <div onClick={handleClose}><CloseIcon/></div>
      </div>

      {
        showspin ? <Spinner/>: 
        <form style={MenuProps.root}>
        <Grid container   sx={{ alignItems: "center" }}spacing={1}>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <TextField
              label="Account Name"
              variant="outlined"
              fullWidth={true}
              name='acoountName' 
              value={inputdata.acoountName} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <FormControl fullWidth={true}>
              <InputLabel id="demo-multiple-name-label">All Channels</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="All Channels" />}
                autoWidth={true}
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
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <TextField
              label="Contact Name"
              variant="outlined"
              fullWidth={true}
              name='contactName' 
              value={inputdata.contactName} 
              onChange={setInputValue} 
              
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <FormControl fullWidth={true} >
              <InputLabel id="demo-multiple-name-label">
                All Cases Type
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
                autoWidth={true}
              >
                {caseType.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              label="Mobile"
              variant="outlined"
              fullWidth={true}
              name='mobile' 
              value={inputdata.mobile} 
              onChange={setInputValue} 
              
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
              label="Case Title"
              variant="outlined"
              fullWidth={true}
              name='casetitile' 
              value={inputdata.casetitile} 
              onChange={setInputValue} 
              
            />
          </Grid>  
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth={true}
              name='email' 
              value={inputdata.email} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <FormControl fullWidth={true}  >
              <InputLabel id="demo-multiple-name-label">
                All Cases Type
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="All Cases Type" />}
                autoWidth={true}
              >
                {catagory.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth={true}
              name='phone' 
              value={inputdata.phone} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <FormControl fullWidth={true}>
              <InputLabel id="demo-multiple-name-label">
                Select Category from product list
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
                autoWidth={true}
              >
                {selectcategory.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item  xs={12} sm={6} md={6} lg={6}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth={true}
              name='address' 
              value={inputdata.address} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <FormControl fullWidth={true}>
              <InputLabel id="demo-multiple-name-label">
                Select Category from product list
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
                autoWidth={true}
              >
                {brands.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <TextField
              label="Pin Codes"
              variant="outlined"
              fullWidth={true}
              name='pinCode' 
              value={inputdata.pinCode} 
              onChange={setInputValue} 
              
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <TextField
              label="Serial No"
              variant="outlined"
              fullWidth={true}
              name='serialNo' 
              value={inputdata.serialNo} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              label="Technician"
              variant="outlined"
              fullWidth={true}
              name='technician' 
              value={inputdata.technician} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              label="Model(Serial Number)"
              variant="outlined"
              fullWidth={true}
              name='model' 
              value={inputdata.model} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          inputProps={{
            style: {
              width: "359px",
            },
          }}
          value={date}
          onChange={handleChangedate}
        />
      </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <FormControl fullWidth={true}>
              <InputLabel id="demo-multiple-name-label">
               Warranty
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
                autoWidth={true}
              >
                {warranty.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <FormControl  fullWidth={true}>
              <InputLabel id="demo-multiple-name-label">
               priority
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
                autoWidth={true}
              >
                {priorityItem.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <FormControl fullWidth={true}>
              <InputLabel id="demo-multiple-name-label">
               problem
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
                autoWidth={true}
              >
                {selectproblem.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <FormControl fullWidth={true}>
              <InputLabel id="demo-multiple-name-label">
               Source
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
                autoWidth={true}
              >
                {sources.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <FormControl fullWidth={true}>
              <InputLabel id="demo-multiple-name-label">
               Selected Reason
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
                autoWidth={true}
              >
                {selectRegin.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <TextField
              label="Invoice Number"
              variant="outlined"
              fullWidth={true}
              name='invoiceNumber' 
              value={inputdata.invoiceNumber} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              label="Quantity"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              label="Case Remarks"
              variant="outlined"
              fullWidth={true}
              name='remarks' 
              value={inputdata.remarks} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <TextField
              label="Products Other details"
              variant="outlined"
              fullWidth={true}
              name='otherDetails' 
              value={inputdata.otherDetails} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item  xs={12} sm={6} md={6} lg={6}>
            <TextField
              label="Tags"
              placeholder="Enter tags"
              variant="outlined"
              fullWidth={true}
              name='tags' 
              value={inputdata.tags} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item  xs={12} sm={6} md={3} lg={3} >
            <TextField
              label="Agents"
              placeholder="Tester"
              variant="outlined"
              fullWidth={true}
              name='agents' 
              value={inputdata.agents} 
              onChange={setInputValue} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} >
            <FormControl fullWidth={true} >
              <InputLabel id="demo-multiple-name-label">
               Visibility
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="Name" />}
                autoWidth={true}
              >
                {visibility.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item >
          <Checkbox sx={{width:"30px",marginRight:1}}  /><span>Billable</span>
          <Checkbox label="Billable"sx={{width:"30px",marginLeft:1}}  /><span>Package Services</span>
          </Grid>
          <Grid item xs={12}md={12}  >
           <Button variant="outlined"onClick={handleClose}>CANCEL</Button>
           <Button variant="contained" color="success" sx={{ marginLeft:1}}>Save</Button>
          </Grid>
  
        </Grid>
        </form>
      }
     
     
    </div>
  );
};
