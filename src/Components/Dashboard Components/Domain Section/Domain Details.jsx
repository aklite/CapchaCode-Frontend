// Importing all essential modules
import React, { useContext } from "react"; // Import React & React Hooks
import { useParams, Link, useNavigate } from "react-router-dom"; // Importing Link from react-router-dom
import { utc } from "moment/moment"; // Importing moment.js

// import Button from  Material UI
import { Button } from "@mui/material"; // Importing Button from Material UI

// Importing all essential components
import Navbar from "../../Regular Components/Navbar"; // Import Navbar component
import Footer from "../../Regular Components/Footer"; // Import Footer component

// import all essential APIs from the API folder
import { AuthStatusManagementAPI } from "../../../API/Context/Auth Status Management API"; // Importing Auth Status Management API

// import function from the API folder
import Update_Document_Title from "../../../API/Effect/Update Document Title"; // Importing Update Document Title function

export default function ViewSingleDomainDetails() {
  let PageNavigator = useNavigate(); // Destructuring useNavigate hook
  let { id } = useParams(); // Destructuring useParams hook

  let { FullaccountDetails } = useContext(AuthStatusManagementAPI); // Destructuring Auth Status Management API

  let FilteredData = FullaccountDetails.DomainDetails.filter(
    (Data) => Data._id === id
  ); // Filtering the Domain Details

  // update document title
  Update_Document_Title(`${FilteredData[0].Hostname} - Domain Full Details`);

  return (
    <>
      <Navbar CurrentNavbarName={FilteredData[0].Hostname} />
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <h1 className="text-4xl font-bold mb-8">Domain Full Details</h1>
        <div className="rounded-md p-4 w-[98%] max-w-lg mx-5 shadow-2xl bg-slate-300">
          {FilteredData.map((SingleData, Key) => {
            // Parsing the Added Date
            let ParseAdddedDate = utc(SingleData.AddedDate).format(
              "DD/MM/YYYY"
            );
            let ParseLastUpdatedDate = utc(SingleData.LastUpdatedDate).format(
              "DD/MM/YYYY"
            );
            return (
              <>
                <div key={Key}>
                  <h2 className="text-2xl font-bold mb-4">
                    {SingleData.Hostname}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    <strong>Added Date: </strong> {ParseAdddedDate}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Account ID: </strong> {SingleData.AccountID}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Captcha Type: </strong> {SingleData.CaptchaType}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Last Updated Date: </strong> {ParseLastUpdatedDate}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Status: </strong>{" "}
                    {SingleData.Status === true ? "Active" : "Inactive"}
                  </p>
                </div>
                <Button
            onClick={() => {
              PageNavigator("/dashboard");
            }}
            variant="contained"
            color="info"
            style={{ marginLeft: 118.25 }}
          >
            Go Back
          </Button>
          {FullaccountDetails.DomainDetails.length === 1 || SingleData.Hostname === "0.0.0.0:3000"  ? (
            <Button
              variant="contained"
              color="error"
              style={{ marginLeft: 118.25, marginTop: 15 }}
              disabled
            >
              Delete
            </Button>
          ) : (
            <Button
              onClick={() => {
                PageNavigator("/dashboard");
              }}
              variant="contained"
              color="error"
              style={{ marginLeft: 118.25, marginTop: 15 }}
            >
              Delete
            </Button>
          )}
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
