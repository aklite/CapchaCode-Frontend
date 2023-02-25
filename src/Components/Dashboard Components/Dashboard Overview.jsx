import React, { useState, useEffect, useContext } from "react"; // Import React & React Hooks

// import all components of Dashboard
import Footer from "../../Components/Regular Components/Footer"; // Import Footer.jsx from Components folder
import Loader from "../../Components/Regular Components/Loading"; // Import Loading.jsx from Components folder

// Importing all Context API
import { AuthStatusManagementAPI } from "../../API/Context/Auth Status Management API"; // Import Auth Status Management API.jsx

// import all effect functions of Dashboard
import Update_Title from "../../API/Effect/Update Document Title"; // Import Update Document Title.jsxx
import { POST_Request } from "../../Functions/HTTP Request Sender/POST Request Sender"; // Import POST Request Sender

// import all sub components of Dashboard
import Sidebar from "./Sidebar/Sidebar"; // Import Sidebar.jsx

export default function Dashboard_Overview() {
  // initializing the context api
  let { authStatus, FullaccountDetails, UpdateAccountDetails } = useContext(
    AuthStatusManagementAPI
  ); // Call Auth Status Management API.jsx

  // using all effect functions
  Update_Title(`Dashboard Overview - ${authStatus.Name}`); // updating the document title

  // initializing the state for loading
  let [Load, setLoad] = useState(true); // loading state

  // using all effect functions

  // Fetching all account details from server using POST Request
  useEffect(() => {
    POST_Request("/live/post/info/client-account-info", {
      Email: authStatus.Email,
      AccountID: authStatus.AccountID,
    }).then((reponse) => {
      // validate if Domains is not empty
      if (reponse.Domain.length === 0) {
        reponse.Domain.push({
          Hostname: "0.0.0.0:3000",
          AccountID: authStatus.AccountID,
          AddedDate: Date.now(),
          LastUpdatedDate: Date.now(),
          Status: true,
          CurrentCapcha: [],
          CaptchaType: "None",
        });
      }

      // adding DomainDetails in Data
      reponse.Data.DomainDetails = reponse.Domain; // adding DomainDetails in Data
      UpdateAccountDetails(reponse.Data); // updating the account details
      setLoad(false); // loading state false
    });
  }, []); // end of using all effect functions  for fetching all account details from server

  return (
    <>
      {Load === true ? (
        <Loader
          Loading_Title="Fetching all Account Details"
          Loading_Description="Please wait white we fetch your all account details from server"
        />
      ) : (
        <>
          <Sidebar />
          <div className="lg:ml-[16.25rem]">
            {/* heading  */}
            <h1 className="ml-5 mt-[1rem] lg:mt-[6.25rem] mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Welcome
              </span>{" "}
              {authStatus.Name}
            </h1>
            <h1 className=" ml-5 text-xl lg:text-2xl font-extrabold dark:text-white">
              Account ID :{" "}
              <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
                {authStatus.AccountID}
              </small>
            </h1>

            <div className="flex flex-wrap">
              {/* total capcha served */}
              <div className="mx-6 max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Total Captcha Served
                  </h5>
                </a>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  {FullaccountDetails.Wallet.Balance.TotalCaptchaServed} Captcha
                  Served by your account
                </p>
              </div>

              {/* Account status  */}
              <div className="mx-6 max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Your Account Status
                  </h5>
                </a>
                <p className="mb-3 text-lg font-bold text-green-700 dark:text-gray-400">
                  Your Account is {FullaccountDetails.AccountStatus}
                </p>
              </div>

              <div className="mx-6 max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Your Captcha Type
                  </h5>
                </a>
                <p className="mb-3 text-lg font-bold text-green-700 dark:text-gray-400">
                  Captcha Type :{" "}
                  {FullaccountDetails.DomainDetails[0].CaptchaType}
                </p>
              </div>

              {/* total points */}
              <div className="mx-6 max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Your Current Balance
                  </h5>
                </a>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  Total Balance :{" "}
                  {FullaccountDetails.Wallet.Balance.TotalBalance} Points
                </p>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                >
                  Load points
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* total domains */}
              <div className="mx-6 max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Your Activated Domains
                  </h5>
                </a>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  Total Domains : {FullaccountDetails.DomainDetails.length}
                </p>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                >
                  View All Domains
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* Add new domain */}
              <div className="mx-6 max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Add New Domain
                  </h5>
                </a>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  Add New Domain to your account for start serving captcha to
                  your website visitors
                </p>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                >
                  Add New Domain
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="mx-6 max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    View Last Payments History
                  </h5>
                </a>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  View your last payments history and check your balance and
                  payment status for each payment you made to us
                </p>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                >
                  View Last Payments History
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* Account Details */}
              <div className="mx-6 max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    View Account Details
                  </h5>
                </a>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  View your account details & change your account password and
                  email address if you want to change it
                </p>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                >
                  View Account Details
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* get API Key */}
              <div className="mx-6 max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Get API Key & Snippet
                  </h5>
                </a>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                  Get your API Key & Snippet to start using our API and start
                  serving captcha your users with our services, note that if you
                  begainner you can use our Snippet.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                >
                  Get API Key & Snippet
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* End of cards */}
            </div>
          </div>
          <Footer FooterStyle="static" />
        </>
      )}
    </>
  );
}
