import { createContext, useState } from "react"; // Import React context api

export const ForgetPasswordStateContext = createContext(); // Create a context for Forget Password State

export function ForgetPasswordStateManagementAPI({ children }) {
  // State for Email & Phone Number Section for the Forget Password Page to store security questions
  const [SecurityQuestions, setSecurityQuestions] = useState({}); // State for Security Questions
  const UpdateSecurityQuestions = (Questions) =>
    setSecurityQuestions(Questions); // Function for updating the Security Questions

  // store account details
  const [AccountDetailsForForgetPass, setAccountDetailsForForgetPass] =
    useState({}); // State for Account Details
  const UpdateAccountDetailsForForgetPass = (AccountDetails) =>
    setAccountDetailsForForgetPass(AccountDetails); // Function for updating the Account Details

  // store page section for forget password page
  const [ForgetPageSection, setForgetPageSection] = useState(1); // State for Forget Password Page Section
  const UpdateForgetPageSection = (Section) => setForgetPageSection(Section); // Function for updating the Forget Password Page Section

  return (
    <ForgetPasswordStateContext.Provider
      value={{
        SecurityQuestions,
        UpdateSecurityQuestions,
        AccountDetailsForForgetPass,
        UpdateAccountDetailsForForgetPass,
        ForgetPageSection,
        UpdateForgetPageSection,
      }}
    >
      {" "}
      {children}{" "}
    </ForgetPasswordStateContext.Provider>
  );
}
