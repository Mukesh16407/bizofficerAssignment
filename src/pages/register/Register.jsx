import { React } from "react";
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

const ITEM_HEIGHT = 32;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
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
]
export const Register = () => {
  return (
    <div className="register">
      <p>New Cases</p>
      <Grid container spacing={1} sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Account Name"
            variant="outlined"
            inputProps={{
              style: {
                width: "500px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, width: 500 }}>
            <InputLabel id="demo-multiple-name-label">All Channels</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {channels.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Contact Name"
            variant="outlined"
            inputProps={{
              style: {
                width: "500px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, width: 500 }}>
            <InputLabel id="demo-multiple-name-label">
              All Cases Type
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {caseType.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Mobile"
            variant="outlined"
            inputProps={{
              style: {
                width: "500px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Case Title"
            variant="outlined"
            inputProps={{
              style: {
                width: "460px",
                marginLeft:"20px"
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            inputProps={{
              style: {
                width: "500px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, width: 500 }}>
            <InputLabel id="demo-multiple-name-label">
              All Cases Type
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {catagory.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone"
            variant="outlined"
            inputProps={{
              style: {
                width: "500px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, width: 500 }}>
            <InputLabel id="demo-multiple-name-label">
              Select Category from product list
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {selectcategory.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Address"
            variant="outlined"
            inputProps={{
              style: {
                width: "500px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, width: 500 }}>
            <InputLabel id="demo-multiple-name-label">
              Select Category from product list
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {brands.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Pin Codes"
            variant="outlined"
            inputProps={{
              style: {
                width: "500px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Serial No"
            variant="outlined"
            inputProps={{
              style: {
                width: "485px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Technician"
            variant="outlined"
            inputProps={{
              style: {
                width: "500px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Model(Serial Number)"
            variant="outlined"
            inputProps={{
              style: {
                width: "485px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        inputProps={{
          style: {
            width: "465px",
          },
        }}
      
      />
    </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, width: 510 }}>
            <InputLabel id="demo-multiple-name-label">
             Warranty
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {warranty.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, width: 514 }}>
            <InputLabel id="demo-multiple-name-label">
             priority
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {priorityItem.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, width: 510 }}>
            <InputLabel id="demo-multiple-name-label">
             problem
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {selectproblem.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, width: 510 }}>
            <InputLabel id="demo-multiple-name-label">
             Source
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {sources.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ m: 1, width: 510 }}>
            <InputLabel id="demo-multiple-name-label">
             Source
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {selectRegin.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Invoice Number"
            variant="outlined"
            inputProps={{
              style: {
                width: "500px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <TextField
            label="Case Remarks"
            variant="outlined"
            inputProps={{
              style: {
                width: "500px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Products Other details"
            variant="outlined"
            inputProps={{
              style: {
                width: "500px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Tags"
            placeholder="Enter tags"
            variant="outlined"
            inputProps={{
              style: {
                width: "500px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} spacing={1}>
          <TextField
            label="Agents"
            placeholder="Tester"
            variant="outlined"
            inputProps={{
              style: {
                width: "300px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControl sx={{ m: 1, width: 100 }}>
            <InputLabel id="demo-multiple-name-label">
             Visibility
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {visibility.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} sx={{alignItems:"center"}} >
        <Checkbox sx={{width:"30px",marginRight:1}}  /><span>Billable</span>
        <Checkbox label="Billable"sx={{width:"30px",marginLeft:1}}  /><span>Package Services</span>
        </Grid>
        <Grid item xs={12}  >
         <Button variant="outlined">CANCEL</Button>
         <Button variant="outlined" sx={{backgroundColor:"green",color:"white"}}>Save</Button>
        </Grid>

      </Grid>
    </div>
  );
};
