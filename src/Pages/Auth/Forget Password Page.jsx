import React, { useState, useContext } from "react"; // import React from 'react' is required for JSX to work

// import all components
import Navbar from "../../Components/Regular Components/Navbar"; // Importing the Navbar
import Footer from "../../Components/Regular Components/Footer"; // Importing the Footer
import { Forget_Password_Part_Two } from "../../Components/Auth Components/Forget Password/Forget Password Part 2"; // Importing the Forget Password Part 2
import { Forget_Password_Part_Three } from "../../Components/Auth Components/Forget Password/Forget Password Part 3"; // Importing the Forget Password Part 3
import { AlertModal } from "../../Components/Modal/Alert"; // Importing the Alert Modal
import LoadingAnime from "../../Components/Regular Components/Loading"; // Importing the Loading Component

// import all styles
import "../../assets/custom css/Lightning Button.css"; // Importing the Lightning Button CSS

// import all functions
import { First_Step_Validator } from "../../validator/Forget Password Validator"; // Import Forget Password Validator
import { Get_Security_Questions_Function_For_Forget_Password } from "../../Functions/Auth/Auth Function"; // Importing the Auth Function for getting the security questions
import Update_Document_Title from "../../API/Effect/Update Document Title"; //

// import all context
import { ForgetPasswordStateContext } from "../../API/Context/Forget Password State API"; // Importing the Forget Password State AP
import { AlertStateManagementAPI } from "../../API/Context/Alert State Management API"; // Importing the Alert State Management API

export default function Forget_Password() {
  let [LoaderAnimationCreator, setLoaderAnimationCreator] = useState(false); // State for the Loader
  let [usersDetailsforForgetPass, setusersDetailsforForgetPass] = useState({
    Email: "",
    PhoneNumber: "",
  }); // State for Email & Phone Number Section for the Forget Password Page

  // function for handle inputs change in page 1
  let Name, Value;
  const Handler = (element) => {
    // getting the name and value of the input
    Name = element.target.name;
    Value = element.target.value;
    // setting the state for the input
    setusersDetailsforForgetPass({
      ...usersDetailsforForgetPass,
      [Name]: Value,
    });
  };

  // context for the forget password page
  let {
    UpdateSecurityQuestions,
    UpdateAccountDetailsForForgetPass,
    ForgetPageSection,
    UpdateForgetPageSection,
  } = useContext(ForgetPasswordStateContext);

  let { UpdateAlertModalState, alertModalState } = useContext(
    AlertStateManagementAPI
  ); // context for the alert modal state management api

  // forget password function for processing the forget password page
  const ForgetPasswordFunction = async () => {
    let VerifyResult = await First_Step_Validator(usersDetailsforForgetPass); // validating the data
    if (VerifyResult === false) {
      alert("Please check your data again!");
    } else if (VerifyResult === true) {
      setLoaderAnimationCreator(true); // setting the loader to true
      let { Questions, AccountDetails, Title, Description } =
        await Get_Security_Questions_Function_For_Forget_Password(
          usersDetailsforForgetPass
        ); // getting the security questions from the server
      if (Title === "Account not found") {
        setLoaderAnimationCreator(false); // setting the loader to false
        UpdateAlertModalState({}); // clearing the alert modal state
        UpdateAlertModalState({ Title, Description }); // updating the alert modal state
      } else if (Questions !== undefined) {
        UpdateSecurityQuestions(Questions); // updating the security questions
        UpdateAccountDetailsForForgetPass(AccountDetails); // updating the account details
        setLoaderAnimationCreator(false); // setting the loader to false
        UpdateForgetPageSection(2); // changing the page section to 2
      }
      // setForgetPageSection(2); // changing the page section to 2
    }
  };

  // changing docu8ment title
  Update_Document_Title("Reset Password (Step 1)"); // updating the document title

  return (
    <>
      {ForgetPageSection === 1 ? (
        <>
          {LoaderAnimationCreator === true ? (
            <LoadingAnime
              Loading_Title="Security Question are loading from server, please wait ..."
              Loading_Description="Dear user please wait, while we are loading your security questions."
            />
          ) : (
            <>
              <Navbar CurrentNavbarName="Reset Password (Step 1)" />
              <div className="mt-[10.5rem] lg:mx-10 mx-5">
                {alertModalState.Title === "Account not found" ? (
                  <AlertModal
                    messsageTitle={alertModalState.Title}
                    MainMessage={alertModalState.Description}
                  />
                ) : null}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={Handler}
                    value={usersDetailsforForgetPass.Email}
                    type="email"
                    id="Email"
                    name="Email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@hmail.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="PhoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter Your Phone Number (Without Country Code)
                  </label>
                  <input
                    onChange={Handler}
                    value={usersDetailsforForgetPass.PhoneNumber}
                    type="number"
                    id="PhoneNumber"
                    name="PhoneNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="ex: 706xxxxxxx"
                  />
                </div>

                <button
                  onClick={ForgetPasswordFunction}
                  type="submit"
                  className="bn632-hover bn25 w-4/5"
                >
                  Continue
                </button>
              </div>
              <Footer />
            </>
          )}
        </>
      ) : ForgetPageSection === 2 ? (
        <>
          <Navbar CurrentNavbarName="Reset Password (Step 2)" />
          <Forget_Password_Part_Two />
          <Footer FooterStyle="static" />
        </>
      ) : ForgetPageSection === 3 ? (
        <>
          <Navbar CurrentNavbarName="Reset Password (Step 3)" />
          <Forget_Password_Part_Three />
          <Footer FooterStyle="static" />
        </>
      ) : null}
    </>
  );
}
