// import essential modules
import React, { useState, useContext } from "react"; // import react

// import css from Material UI
import { TextField, Select, MenuItem, InputLabel, Button } from "@mui/material"; // import components from Material UI

// import context API
import { AuthStatusManagementAPI } from "../../../API/Context/Auth Status Management API"; // import context API
import { DashboardComponentsStateManagerContext } from "../../../API/Context/Dashboard Components  State Manager API"; // import context API

// import components
import Sidebar from "../Sidebar/Sidebar"; // import Sidebar component
import Loader from "../../Regular Components/Loading"; // import Loader component
import { AlertModal } from "../../Modal/Alert"; // import Alert component

// import functions
import DomainAddValidator from "../../../validator/Domain Add Validator"; // import DomainAddValidator function
import DomainAddFunction from "../../../Functions/Domain Management/Domain Add Function"; // import DomainAddFunction function
export default function AddDomain() {
  // using context API
  let { FullaccountDetails } = useContext(AuthStatusManagementAPI); // destructuring context API
  let { UpdateDefaultPageState } = useContext(
    DashboardComponentsStateManagerContext
  ); // destructuring context API

  // using useState hook
  // state for Alert
  let [AlertStatus, setAlertStatus] = useState({}); // set state for Alert
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
    // set true state for Loader
    setLoaderStatus(true); // set true state for Loader
    let ValidationResult = DomainAddValidator(DomainData); // validate domain add form
    if (ValidationResult === true) {
      let Response = await DomainAddFunction(DomainData); // add domain
      setAlertStatus(Response); // log response
      setLoaderStatus(false); // set false state for Loader
      console.log(AlertStatus); // log response
    } // if form is valid then
    else if (ValidationResult === false) {
      // set false state for Loader
      setLoaderStatus(false); // set false state for Loader
    } // else if form is invalid then
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
          {AlertStatus.Stat == "Success" ? (
            <>
              <div className="alert shadow-xl mt-[16.25rem]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div>
                    <h3 className="font-bold">{AlertStatus.Stat}</h3>
                    <div className="text-xs">{AlertStatus.Description}</div>
                  </div>
                </div>
                <div className="flex-none">
                  <button
                    onClick={() => UpdateDefaultPageState("default")}
                    className="btn btn-sm"
                  >
                    Go To Dashboard
                  </button>
                </div>
              </div>
            </>
          ) : AlertStatus.Stat === "Already Exists" ? (
            <>
              <div className="alert shadow-xl mt-[16.25rem]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div>
                    <h3 className="font-bold">{AlertStatus.Stat}</h3>
                    <div className="text-xs">{AlertStatus.Description}</div>
                  </div>
                </div>
                <div className="flex-none">
                  <button
                    onClick={() => UpdateDefaultPageState("default")}
                    className="btn btn-sm"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </>
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
                    <MenuItem value="Mixed Captcha">Mixed Captcha</MenuItem>
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
      )}
    </>
  );
} // export AddDomain component
