// Importing all essential modules
import React, { useContext } from "react"; // Import React & React Hooks
import { useParams, Link } from "react-router-dom"; // Importing Link from react-router-dom
import { utc } from "moment/moment"; // Importing moment.js

// Importing all essential components
import Navbar from "../../Regular Components/Navbar"; // Import Navbar component
import Footer from "../../Regular Components/Footer"; // Import Footer component

// import all essential APIs from the API folder
import { AuthStatusManagementAPI } from "../../../API/Context/Auth Status Management API"; // Importing Auth Status Management API

export default function ViewSingleDomainDetails() {
  let { id } = useParams(); // Destructuring useParams hook

  let { FullaccountDetails } = useContext(AuthStatusManagementAPI); // Destructuring Auth Status Management API

  let FilteredData = FullaccountDetails.DomainDetails.filter(
    (Data) => Data._id === id
  ); // Filtering the Domain Details

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">Domain Full Details</h1>
        <div className="bg-gray-200 rounded-md p-4 w-[98%] max-w-lg mx-5">
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
                  <Link
                    className="mt-12 ml-[8rem] lg:ml-[12.25rem] bg-blue-600 px-5 text-white py-2 rounded-md hover:bg-blue-700"
                    to="/dashboard"
                  >
                    Go Back
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
