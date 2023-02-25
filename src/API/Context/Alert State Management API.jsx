import { createContext, useState } from "react"; // Importing Context API

// alert modal api context with terms and conditions state management
export const AlertStateManagementAPI = createContext(); // Creating a Context API

export function AlertModalStateManagementAPI({ children }) {
  // Creating a function component

  const [alertModalState, setAlertModalState] = useState({}); // Creating a state for the alert modal
  const UpdateAlertModalState = (alertModalState) =>
    setAlertModalState(alertModalState); // Updating the alert modal state

  return (
    <AlertStateManagementAPI.Provider
      value={{ UpdateAlertModalState, alertModalState }}
      >
      {children}
    </AlertStateManagementAPI.Provider> // Returning the Context API
  );
}
