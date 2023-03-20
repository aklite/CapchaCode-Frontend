// import essential modules
import React from "react"; // import react

// import css from Material UI
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button
} from "@mui/material"; // import components from Material UI

// import components
import Sidebar from "../Sidebar/Sidebar"; // import Sidebar component
export default function AddDomain() {
  return (
    <>
      <Sidebar />
      <div className="lg:mt-[7.25rem] lg:ml-[20rem]">
        <h1 className="mb-4 ml-2 mt-3 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Add New
          </span>{" "}
          Domain Name
        </h1>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-[3.25rem] lg:ml-[13.25rem] shadow-2xl">
          <TextField
            fullWidth
            label="Enter Domain Name *"
            style={{ marginBottom: 21 }}
            id="fullWidth"
          />
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select Captcha Type
            </InputLabel>
            <Select label="Select Captcha Type *">
            <MenuItem value="">Select Captcha Type *</MenuItem>
              <MenuItem value="Random Word">Random Word</MenuItem>
              <MenuItem value="Random Number">Random Number</MenuItem>
              <MenuItem value="Random Mixed Captcha">
                Random Mixed Captcha
              </MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="success" style={{marginTop:20, marginLeft:102}}>Add Domain</Button>
        </div>
      </div>
    </>
  );
} // export AddDomain component
