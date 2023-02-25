import React, { useContext, useState } from "react";
import { Button } from "@mui/material"; // Importing the Button from Material UI

// import all functions
import Update_Document_Title from "../../../API/Effect/Update Document Title"; // Importing the Update Document Title

// Contexts
import { ForgetPasswordStateContext } from "../../../API/Context/Forget Password State API"; // Context API for Forget Password

export function Forget_Password_Part_Two() {
  let { SecurityQuestions, UpdateSecurityQuestions, UpdateForgetPageSection } =
    useContext(ForgetPasswordStateContext); // Context API for Forget Password

  // state for the answer using usestate hook
  let [UserProvidedSecurityAnswer, setUserProvidedSecurityAnswer] = useState({
    Answer1: "",
    Answer2: "",
  }); // state for the answer

  // handler for update data
  let Name, Value;
  const Handler = (element) => {
    Name = element.target.name; // getting the name and value of the input
    Value = element.target.value; // getting the name and value of the input
    // setting the state for the input
    setUserProvidedSecurityAnswer({
      ...UserProvidedSecurityAnswer,
      [Name]: Value,
    }); // setting the state for the input
  };

  // function for checking the answer
  const CheckAnswer = () => {
    // converting the answer to lowercase
    let Ans1 = UserProvidedSecurityAnswer.Answer1.toLowerCase();
    let Ans2 = UserProvidedSecurityAnswer.Answer2.toLowerCase();

    // checking the answer
    if (
      Ans1 === SecurityQuestions.Answer1 &&
      Ans2 === SecurityQuestions.Answer2
    ) {
      console.log("Correct Answer");
      UpdateSecurityQuestions({}); // updating the security questions with empty object
      UpdateForgetPageSection(3); // changing the page section to 3
    } else if (
      (Ans1 !== SecurityQuestions.Answer1 &&
        Ans2 !== SecurityQuestions.Answer2) ||
      Ans1 !== SecurityQuestions.Answer1 ||
      Ans2 !== SecurityQuestions.Answer2
    ) {
      alert("Wrong Answer, Please try again");
    }
  };

  // changing docu8ment title
  Update_Document_Title("Reset Password (Step 2)"); // updating the document title

  return (
    <>
      <h1 className="lg:text-xl lg:mt-[6.25rem] mb-10 mt-[5.25rem] text-xs ml-2 lg:ml-[25.25rem] font-mono">
        Answer this security questions to recover your account
      </h1>
      <div className="mb-6 mx-5 lg:mx-10">
        <label
          htmlFor="Question1"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Question 1
        </label>
        <input
          value={SecurityQuestions.Question1}
          type="text"
          id="Question1"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-inner"
          disabled={true}
        />
      </div>
      <div className="mb-6 mx-5 lg:mx-10">
        <label
          htmlFor="Answer1"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Write Your Answer Here (Question 1)
        </label>
        <input
          type="text"
          onChange={Handler}
          value={UserProvidedSecurityAnswer.Answer1}
          placeholder="Enter Your Answer Here"
          id="Answer1"
          name="Answer1"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6 mx-5 lg:mx-10">
        <label
          htmlFor="Question1"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Question 1
        </label>
        <input
          value={SecurityQuestions.Question2}
          type="text"
          id="Question1"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-inner"
          disabled={true}
        />
      </div>
      <div className="mb-6 mx-5 lg:mx-10">
        <label
          htmlFor="Answer2"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Write Your Answer Here (Question 2)
        </label>
        <input
          type="text"
          name="Answer2"
          onChange={Handler}
          value={UserProvidedSecurityAnswer.Answer2}
          placeholder="Enter Your Answer Here"
          id="Answer2"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <Button
        onClick={CheckAnswer}
        variant="contained"
        style={{
          position: "relative",
          left: "5rem",
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
        color="success"
      >
        {" "}
        Verify & Continue{" "}
      </Button>
    </>
  );
}
