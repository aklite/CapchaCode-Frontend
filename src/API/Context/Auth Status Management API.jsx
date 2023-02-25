import { createContext, useState } from "react"; // importing react

export let AuthStatusManagementAPI = createContext(); // creating context

export function AuthStatusManagementAPIProvider({ children }) {
  // creating provider

  // creating state for auth status
  let [authStatus, setAuthStatus] = useState({}); // creating state
  const AuthDetailsupdater = (AllAuthDetails) => setAuthStatus(AllAuthDetails); // updating state

  // creating state for account details
  let [FullaccountDetails, setFullaccountDetails] = useState({}); // creating state for account details
  const UpdateAccountDetails = (AccountDetails) => {
    setFullaccountDetails(AccountDetails);
  }; // updating state for account details

  return (
    <AuthStatusManagementAPI.Provider
      value={{
        authStatus,
        AuthDetailsupdater,
        FullaccountDetails,
        UpdateAccountDetails,
      }}
    >
      {children}
    </AuthStatusManagementAPI.Provider>
  );
}
