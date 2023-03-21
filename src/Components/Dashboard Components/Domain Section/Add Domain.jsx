// import essential modules
import React, { useState, useContext } from "react"; // import react

// import css from Material UI
import { TextField, Select, MenuItem, InputLabel, Button } from "@mui/material"; // import components from Material UI

// import context API
import { AuthStatusManagementAPI } from "../../../API/Context/Auth Status Management API"; // import context API

// import components
import Sidebar from "../Sidebar/Sidebar"; // import Sidebar component
import Loader from "../../Regular Components/Loading"; // import Loader component

export default function AddDomain() {
  // using context API
  let { FullaccountDetails } = useContext(AuthStatusManagementAPI); // destructuring context API

  // using useState hook
  // state for Loader
  let [LoaderStatus, setLoaderStatus] = useState(false); // set state for Loader
  // set state for DomainData
  let [DomainData, setDomainData] = useState({
    Email: FullaccountDetails.Email,
    AccountID: FullaccountDetails.AccountID,
    CaptchaType: "",
    DomainName: "",
  }); // set state for DomainData

  // handle change function
  let Name, Value;
  const HandleInput = (event) => {
    Name = event.target.name;
    Value = event.target.value;
    setDomainData({ ...DomainData, [Name]: Value }); // set state for DomainData with new values
  }; // handle change function

  // submit function
  const SubmitDomain = async () => {
    console.log(DomainData);
    // set true state for Loader
    setLoaderStatus(true); // set true state for Loader
  };
  return (
    <>
      {LoaderStatus === true ? (
        <Loader
          Loading_Title="Linking Domain with this account...."
          Loading_Description="Please Wait while we linking your domain with your account for providing captcha."
        />
      ) : (
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
                name="DomainName"
                value={DomainData.DomainName}
                onChange={HandleInput}
              />
              <br />
              <InputLabel id="demo-simple-select-label">
                Select Captcha Type
              </InputLabel>
              <Select
                fullWidth
                label="Select Captcha Type *"
                name="CaptchaType"
                onChange={HandleInput}
                value={DomainData.CaptchaType}
              >
                <MenuItem value="Random Word">Random Word</MenuItem>
                <MenuItem value="Random Number">Random Number</MenuItem>
                <MenuItem value="Random Mixed Captcha">
                  Random Mixed Captcha
                </MenuItem>
              </Select>
              <Button
                onClick={SubmitDomain}
                variant="contained"
                color="success"
                style={{ marginTop: 20, marginLeft: 102 }}
              >
                Add Domain
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
} // export AddDomain component
