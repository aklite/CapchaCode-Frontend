import React, { useContext, useState } from "react"; // import React from 'react' is required for JSX to work
import "../../../assets/custom css/Lightning Button.css"; // Importing the Lightning Button CSS

// inport all components
import { AlertModal } from "../../Modal/Alert"; // Importing the Alert Modal
import Update_Title from "../../../API/Effect/Update Document Title"; // Importing the Update Document Title Effect
import LoadingAnime from "../../Regular Components/Loading"; // Importing the Loading Component

// import all functions
import { Third_Step_Validator_Final } from "../../../validator/Forget Password Validator"; // Importing the Forget Password Validator
import { Update_User_Password_And_Secret_Code_Function } from "../../../Functions/Auth/Auth Function"; // Importing the Auth Function

// all context api
import { ForgetPasswordStateContext } from "../../../API/Context/Forget Password State API"; // Importing the Forget Password State AP
import { AlertStateManagementAPI } from "../../../API/Context/Alert State Management API";

export function Forget_Password_Part_Three() {
  // all effect states & functions
  let [LoaderAnimationCreator, setLoaderAnimationCreator] = useState(false); // State for the Loader [true, false]
  Update_Title("Reset Password (Step 3)"); // updating the document title

  // using the context api
  let { AccountDetailsForForgetPass, UpdateAccountDetailsForForgetPass } =
    useContext(ForgetPasswordStateContext); // context for the forget password page

  let { UpdateAlertModalState, alertModalState } = useContext(
    AlertStateManagementAPI
  ); // context for the alert modal state management api

  // all states for the forget password page
  let [ClientNewPasswordForforgetPass, setClientNewPasswordForforgetPass] =
    useState({
      AccountID: AccountDetailsForForgetPass.AccountID,
      ClientNewPassword: "",
      NewPassword: "",
      SecretCode: AccountDetailsForForgetPass.SecretCode,
    }); // State for Email & Phone Number Section for the Forget Password Page

  // handler for the inputs
  let Name, value;
  const Handler = (element) => {
    Name = element.target.name; // getting the name and value of the input
    value = element.target.value; // getting the name and value of the input

    // setting the state for the input
    setClientNewPasswordForforgetPass({
      ...ClientNewPasswordForforgetPass,
      [Name]: value,
    }); // setting the state for the input
  };

  // handler for the submit button
  const SubmitHandler = async () => {
    let VarifyResponse = await Third_Step_Validator_Final(
      ClientNewPasswordForforgetPass
    ); // Varify the response
    if (VarifyResponse === false) {
      alert(
        "Plase Check Your Inputs, it seems like you have entered wrong inputs, or you have left some inputs empty. please try again."
      );
    } else if (VarifyResponse === true) {
      setLoaderAnimationCreator(true); // setting the loader animation to true (showing the loader
      let Response = await Update_User_Password_And_Secret_Code_Function(
        ClientNewPasswordForforgetPass
      ); // Updating User's Password & Secret Code in Forget Password Section
      if (Response.Title === "Password & Secret Code updated") {
        setLoaderAnimationCreator(false); // setting the loader animation to false (hiding the loader)
        UpdateAccountDetailsForForgetPass({}); // updating the account details for forget password with empty object
        UpdateAlertModalState(Response); // updating the alert modal state
      } else if (Response.Title === "Account Not Found") {
        setLoaderAnimationCreator(false); // setting the loader animation to false (hiding the loader)
        UpdateAlertModalState(Response); // updating the alert modal state
        UpdateAccountDetailsForForgetPass({}); // updating the account details for forget password with empty object
      }
    }
  }; // handler for the submit button

  return (
    <>
      {LoaderAnimationCreator === true ? (
        <LoadingAnime
          Loading_Title="Updating your Password & Secret Code"
          Loading_Description="Dear user, please wait while we comiunicating with our server & database to update your new credentials"
        />
      ) : (
        <>
          {/* show the alert modal */}
          {alertModalState.Title === "Password & Secret Code updated" ? (
            <AlertModal
              messsageTitle={alertModalState.Title}
              MainMessage={alertModalState.Description}
              Path="/login"
              buttonColor="green"
              ButtonText="Login Now"
            />
          ) : alertModalState.Title === "Account Not Found" ? (
            <AlertModal
              messsageTitle={alertModalState.Title}
              MainMessage={alertModalState.Description}
              ButtonText="Retry"
            />
          ) : null}
          <h1 className=" lg:mt-[6.25rem] mt-[5.25rem] text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            * Change Your Password *
          </h1>
          <hr className="w-48 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
          <p className="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Note that, you can change your password, SecretCode from here.
          </p>
          <p className="mt-[1.75rem] text-center  text-2xl font-medium text-gray-900 dark:text-white">
            <span className="italic">Hey, </span>
            {AccountDetailsForForgetPass.Name}
          </p>
          <p className="mt-[0.75rem] text-center  text-md font-medium text-gray-900 dark:text-white">
            <span className="italic">Account ID : </span>
            {AccountDetailsForForgetPass.AccountID}
          </p>
          <div className="mx-10 my-14">
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your SecretCode
              </label>
              <input
                type="text"
                onChange={Handler}
                id="clientSecretCode"
                name="SecretCode"
                value={ClientNewPasswordForforgetPass.SecretCode}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Set New Password
              </label>
              <input
                type="password"
                id="ClientNewPassword"
                onChange={Handler}
                name="ClientNewPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Confirm Password
              </label>
              <input
                type="text"
                id="Password"
                onChange={Handler}
                name="NewPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <button
            className="button-71 w-6/12 ml-[5.25rem] lg:ml-[20.25rem] mb-5"
            onClick={SubmitHandler}
            role="button"
          >
            Change Now
          </button>
        </>
      )}
      ;
    </>
  );
}
