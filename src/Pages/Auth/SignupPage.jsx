// importing usefull modules
import React, { useState, useContext } from "react"; // importing react

// imporing all components
import Navbar from "../../Components/Regular Components/Navbar"; // importing navbar
import Footer from "../../Components/Regular Components/Footer"; // importing footer
import Update_Document_Title from "../../API/Effect/Update Document Title"; // import Update_Document_Title function
import { AlertModal } from "../../Components/Modal/Alert"; // importing alert modal
import Loading from "../../Components/Regular Components/Loading"; // importing loading
import { Terms_and_Conditions } from "../../Components/Auth Components/Signup/Terms & Conditions Content "; // importing terms and conditions

// importing all functions
import { Signup_Function } from "../../Functions/Auth/Auth Function"; // import Signup_Function function
import { Switch } from "@mui/material"; // importing switch from material-ui

import { AlertStateManagementAPI } from "../../API/Context/Alert State Management API"; // importing alert state management api
// importing Non Changable variables
import { AppName } from "../../Variables/Non-Changable Variables";

function SignupPage() {
  // Question List for Secirity Question Section
  let QuestionList = [
    "Select a security question",
    "What is your pet name?",
    "What is your favourite food?",
    "What is your favourite colour?",
    "What is your favourite movie?",
    "What is your favourite book?",
    "What is your favourite sport?",
    "What is your favourite game?",
    "What is your favourite hobby?",
    "What is your favourite place?",
    "What is your favourite subject?",
    "What is your favourite teacher?",
    "What is your favourite actor?",
    "What is your favourite actress?",
    "What is your favourite singer?",
    "What is your favourite song?",
    "What is your favourite band?",
    "What is your favourite instrument?",
    "What is your favourite cartoon?",
    "What is your favourite animal?",
    "What is your favourite bird?",
    "What is your favourite flower?",
    "What is your favourite fruit?",
    "What is your favourite vegetable?",
    "What is your favourite drink?",
    "What is your favourite ice cream flavour?",
    "What is your favourite chocolate flavour?",
    "What is your favourite pizza topping?",
    "What is your favourite burger topping?",
    "What is your favourite sandwich topping?",
    "What is your favourite pasta topping?",
    "What is your favourite salad topping?",
    "What is your favourite soup topping?",
    "What is your favourite dessert topping?",
    "What is your favourite snack topping?",
    "What is your favourite dish?",
    "What is your favourite cuisine?",
    "What is your favourite restaurant",
  ];

  let [Loader, setLoader] = useState(false); // Loader State
  let [viewtermsAndConditionsState, setviewTermsAndConditionsState] =
    useState(false); // Terms & conditions shower state

  let { UpdateAlertModalState, alertModalState } = useContext(
    AlertStateManagementAPI
  ); // Using the Alert Modal State Management API

  // Changing the title of the page
  Update_Document_Title("Create a new account - CapchaCode");

  // User Registration Data State
  let [UserRegistrationData, setUserRegistrationData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    CustomerPassword: "",
    Password: "",
    SecretCode: "",
    Birthday: "",
    Address: "",
    City: "",
    State: "",
    Pincode: "",
    isTermsConditionAgreed: false,
    Question1: "Select a security question",
    Answer1: "",
    Question2: "Select a security question",
    Answer2: "",
  });

  // Handling Input Data from User
  let Name, value;
  const handleInput = (e) => {
    Name = e.target.name;
    value = e.target.value;
    setUserRegistrationData({ ...UserRegistrationData, [Name]: value }); // Updating the UserRegistrationData State with spread operator
  };

  // Handling Checkbox Data from User
  const handleCheckbox = (e) => {
    Name = e.target.name;
    value = e.target.checked;
    setUserRegistrationData({ ...UserRegistrationData, [Name]: value }); // Updating the UserRegistrationData State with spread operator
  };

  const SubmitRegistrationData = async () => {
    setLoader(true);
    let response = await Signup_Function(UserRegistrationData);
    if (response === undefined) {
      UpdateAlertModalState({});
    } else {
      UpdateAlertModalState({});
      UpdateAlertModalState(response.Status);
    }
    setLoader(false);
  };
  // return statement of the SignupPage
  return (
    <>
      {/* Loading show logic */}
      {Loader === true ? (
        <Loading />
      ) : (
        <div>
          <Navbar CurrentNavbarName="Signup" />
          <div className="mt-[6.5rem] mx-10 mb-12">
            {/* Alert Modal logic */}
            {alertModalState.Stat === "Account Already Exists" ? (
              <AlertModal
                messsageTitle={alertModalState.Stat}
                MainMessage={alertModalState.Description}
                ButtonText="Login Now"
                Path="/login"
                buttonColor="purple"
              />
            ) : alertModalState.Stat === "Account Created Successfully" ? (
              <AlertModal
                messsageTitle={alertModalState.Stat}
                MainMessage={alertModalState.Description}
                ButtonText="Login Now"
                Path="/login"
                buttonColor="green"
              />
            ) : alertModalState.Stat === "Account Creation Failed" ? (
              <AlertModal
                messsageTitle={alertModalState.Stat}
                MainMessage={alertModalState.Description}
                ButtonText="Ok"
                Path="/"
                buttonColor="red"
              />
            ) : null}

            {/* Terms 7 Conditions Shower Logic  */}
            {viewtermsAndConditionsState === true ? (
              <div
                id="defaultModal"
                tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
              >
                <div className="relative w-full h-full max-w-2xl md:h-auto lg:ml-[14.5rem] shadow-2xl mt-[4.25rem] lg:mt-[8.25rem]">
                  {/* <!-- Modal content --> */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Terms of Conditions for {AppName}
                      </h3>
                      <button
                        onClick={() => {
                          setviewTermsAndConditionsState(false);
                        }}
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="defaultModal"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <Terms_and_Conditions />
                  </div>
                </div>
              </div>
            ) : null}
            {/* Terms & Conditions page end here  */}

            {/* Customer Name */}
            <div className="mb-6">
              <label
                htmlFor="CustomerName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your Name *
              </label>
              <input
                type="text"
                id="CustomerName"
                name="Name"
                onChange={handleInput}
                value={UserRegistrationData.Name}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="John Doe"
                required
              />
            </div>
            {/* Customer Email */}
            <div className="mb-6">
              <label
                htmlFor="CustomerEmail"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your Email Address *
              </label>
              <input
                type="email"
                id="CustomerEmail"
                name="Email"
                onChange={handleInput}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                value={UserRegistrationData.Email}
                required
              />
            </div>
            {/* Customer Phone Number */}
            <div className="mb-6">
              <label
                htmlFor="CustomerPhoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your phone number (WhatsApp Preferred) *
              </label>
              <input
                type="number"
                id="CustomerPhonerNumber"
                name="PhoneNumber"
                onChange={handleInput}
                value={UserRegistrationData.PhoneNumber}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="+91xxxxxxxxxx"
                required
              />
            </div>
            {/* Customer Password */}
            <div className="mb-6">
              <label
                htmlFor="CustomerPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Password *
              </label>
              <input
                type="password"
                id="CustomerPassword"
                name="CustomerPassword"
                onChange={handleInput}
                value={UserRegistrationData.CustomerPassword}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="********"
                required
              />
            </div>
            {/* Customer Confirm Password */}
            <div className="mb-6">
              <label
                htmlFor="CustomerConfirmPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Confirm Password *
              </label>
              <input
                type="password"
                id="CustomerConfirmPassword"
                name="Password"
                onChange={handleInput}
                value={UserRegistrationData.Password}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="********"
                required
              />
            </div>
            {/* Customer Secret Code */}
            <div className="mb-6">
              <label
                htmlFor="CustomerSecretCode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Secret Code (For Account Security) *
              </label>
              <input
                type="text"
                id="CustomerSecretCode"
                name="SecretCode"
                onChange={handleInput}
                value={UserRegistrationData.SecretCode}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter Secret Code"
                required
              />
            </div>
            {/* Customer Date of Birth */}
            <div className="mb-6">
              <label
                htmlFor="CustomerDateOfBirth"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your Date of Birth *
              </label>
              <input
                type="date"
                id="CustomerDateOfBirth"
                name="Birthday"
                onChange={handleInput}
                value={UserRegistrationData.Birthday}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            {/* Customer Address */}
            <div className="mb-6">
              <label
                htmlFor="CustomerAddress"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your Address *
              </label>
              <input
                type="text"
                id="CustomerAddress"
                name="Address"
                onChange={handleInput}
                value={UserRegistrationData.Address}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter Your Address"
                required
              />
            </div>
            {/* Customer City */}
            <div className="mb-6">
              <label
                htmlFor="CustomerCity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your City *
              </label>
              <input
                type="text"
                id="CustomerCity"
                name="City"
                onChange={handleInput}
                value={UserRegistrationData.City}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter your City Name"
                required
              />
            </div>
            {/* Customer State */}
            <div className="mb-6">
              <label
                htmlFor="CustomerState"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your State *
              </label>
              <input
                type="text"
                id="CustomerState"
                name="State"
                onChange={handleInput}
                value={UserRegistrationData.State}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter your state Name"
                required
              />
            </div>
            {/* Customer Pincode */}
            <div className="mb-6">
              <label
                htmlFor="CustomerPincode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your pincode *
              </label>
              <input
                type="number"
                id="CustomerPincode"
                name="Pincode"
                onChange={handleInput}
                value={UserRegistrationData.Pincode}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter your pincode"
                required
              />
            </div>
            {/* Customer Security Question & Answer 1 */}
            <div className="flex w-full my-6 mb-[3.75rem] space-x-7">
              <div className="mb-6">
                <label
                  htmlFor="Question1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Choose a security question *
                </label>
                <select
                  className="w-full"
                  value={UserRegistrationData.Question1}
                  name="Question1"
                  onChange={handleInput}
                >
                  {QuestionList.map((Question, index) => {
                    return (
                      <option key={index} value={Question}>
                        {Question}
                      </option>
                    );
                  })}
                </select>
              </div>
              <input
                className="w-4/5 text-center border-double border-4 border-black"
                type="text"
                name="Answer1"
                value={UserRegistrationData.Answer1}
                onChange={handleInput}
                placeholder="Enter Your Security Question's answer"
              />
            </div>
            {/* Customer Security Question & Answer 2 */}
            <div className="flex w-full my-6 mb-[3.75rem] space-x-7">
              <div className="mb-6">
                <label
                  htmlFor="Question1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Choose Second security question *
                </label>
                <select
                  className="w-full"
                  value={UserRegistrationData.Question2}
                  name="Question2"
                  onChange={handleInput}
                >
                  {QuestionList.map((Question, index) => {
                    return (
                      <option key={index} value={Question}>
                        {Question}
                      </option>
                    );
                  })}
                </select>
              </div>
              <input
                className="w-4/5 text-center border-double border-4 border-black"
                type="text"
                name="Answer2"
                value={UserRegistrationData.Answer2}
                onChange={handleInput}
                placeholder="Enter Your Security Question's answer"
              />
            </div>
            {/* Customer Terms & conditions Aggement */}
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <Switch
                  id="termsandconditions"
                  name="isTermsConditionAgreed"
                  color="success"
                  onChange={handleCheckbox}
                />
              </div>
              <label
                htmlFor="terms"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <button
                  onClick={() => {
                    setviewTermsAndConditionsState(true);
                  }}
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </button>
              </label>
            </div>
            <button
              type="submit"
              onClick={SubmitRegistrationData}
              className="button-30 ml-[2.5rem] lg:ml-[30.5rem]"
            >
              Register new account
            </button>
          </div>
          <Footer FooterStyle="static" />
        </div>
      )}
    </>
  );
}

export default SignupPage;
