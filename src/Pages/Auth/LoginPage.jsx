import React, { useState } from "react"; // import React from 'react' is not necessary in React 17
import Navbar from "../../Components/Regular Components/Navbar"; // import Navbar
import Footer from "../../Components/Regular Components/Footer"; // import Footer
import { Link } from "react-router-dom"; // import react-router-dom
import Update_Document_Title from "../../API/Effect/Update Document Title"; // import Update_Document_Title function
import { Login_Function } from "../../Functions/Auth/Auth Function"; // import Login_Function function
import LoginDataValidator from "../../validator/Login Validator"; // importing Login Data validator function for validating Data

import { AlertModal } from "../../Components/Modal/Alert"; // import Alert function
// Context API
import { useContext } from "react"; // Import React

import { AuthStatusManagementAPI } from "../../API/Context/Auth Status Management API"; // Import Auth Status Management API.jsx
import { AlertStateManagementAPI } from "../../API/Context/Alert State Management API"; // importing alert state management api

// loading effect
import Loading from "../../Components/Regular Components/Loading"; // import Loading

function LoginPage() {
  let { UpdateAlertModalState, alertModalState } = useContext(
    AlertStateManagementAPI
  ); // Using the Alert Modal State Management API
  let { AuthDetailsupdater } = useContext(AuthStatusManagementAPI); // Call Auth Status Management API.jsx
  let [Loader, setLoader] = useState(false); // Loader state
  Update_Document_Title("Login - CapchaCode"); // Update Document Title
  let [UserLoginData, setUserLoginData] = useState({
    Email: "",
    Password: "",
    SecretCode: "",
  });

  // handler
  let Name, value;
  const LoginrequestHandler = (e) => {
    Name = e.target.name;
    value = e.target.value;
    setUserLoginData({ ...UserLoginData, [Name]: value });
  };

  // Login Function
  const Login_Process = async () => {
    let DataValidateResponses = await LoginDataValidator(UserLoginData);

    if (DataValidateResponses === false) {
      alert("Please fill all the fields!");
    } else if (DataValidateResponses === true) {
      setLoader(true);
      let reponse = await Login_Function(UserLoginData);

      if (reponse.Status === false) {
        setLoader(false); // Loader state false
        UpdateAlertModalState({}); // Update Alert Modal State with empty object
        UpdateAlertModalState({
          Stat: reponse.Stat,
          Description: reponse.Description,
        }); // Update Alert Modal State with reponse
        AuthDetailsupdater({}); // refilling the auth status with empty object
      } else if (reponse.Status === true) {
        setLoader(false); // Loader state false

        // updating auth status in context api
        AuthDetailsupdater(reponse.MetaData); // updating auth status in context api

        // updating alert modal state
        UpdateAlertModalState({
          Stat: reponse.Stat,
          Description: reponse.Description,
        });
      }
    }
  };

  return (
    <>
      {Loader === true ? (
        <Loading />
      ) : (
        <div>
          <Navbar CurrentNavbarName="Login" />

          {/* Auth Modal Show  */}
          {alertModalState.Stat === "Login Successfull" ? (
            <AlertModal
              messsageTitle={alertModalState.Stat}
              MainMessage={alertModalState.Description}
              ButtonText="My Dashboard"
              Path="/dashboard"
              buttonColor="green"
            />
          ) : alertModalState.Stat === "Secret Code Incorrect" ? (
            <AlertModal
              messsageTitle={alertModalState.Stat}
              MainMessage={alertModalState.Description}
              ButtonText="Try Again"
              Path="/login"
              buttonColor="purple"
            />
          ) : alertModalState.Stat === "Password Incorrect" ? (
            <AlertModal
              messsageTitle={alertModalState.Stat}
              MainMessage={alertModalState.Description}
              ButtonText="Try Again"
              Path="/login"
              buttonColor="indigo"
            />
          ) : alertModalState.Stat === "Account Not Found" ? (
            <AlertModal
              messsageTitle={alertModalState.Stat}
              MainMessage={alertModalState.Description}
              ButtonText="Try Again"
              Path="/login"
              buttonColor="red"
            />
          ) : null}

          <div>
            <div
              id="login"
              className="lg:mx-60 lg:mt-[6.25rem] mx-7 mt-[5.25rem]"
            >
              <div className="mb-6">
                <label
                  htmlFor="Email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  value={UserLoginData.Email}
                  onChange={LoginrequestHandler}
                  name="Email"
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  value={UserLoginData.Password}
                  onChange={LoginrequestHandler}
                  name="Password"
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="*********"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="SecretCode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Secret Passcode
                </label>
                <input
                  value={UserLoginData.SecretCode}
                  onChange={LoginrequestHandler}
                  name="SecretCode"
                  type="text"
                  id="passcode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="ex: A554SS15"
                />
              </div>
              <div className="flex items-start mb-6 mt-[2.25rem] w-full">
                <button
                  onClick={Login_Process}
                  type="submit"
                  className="button-29 w-full lg:ml-[23.25rem]"
                >
                  Login Now
                </button>
              </div>
              <div className="lg:mt-[3.25rem] flex flex-col">
                <p className="text-center text-gray-500 text-sm">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Sign up
                  </Link>
                </p>
                <Link
                  to="/forgot-password"
                  className="text-blue-500 hover:text-blue-700 text-center mt-2"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default LoginPage;
