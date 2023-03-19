import React, { useContext } from "react"; // Import React & React Hooks

// Importing Components
import Navbar from "../../Components/Regular Components/Navbar"; // Import Navbar.jsx from Components folder
import Footer from "../../Components/Regular Components/Footer"; // Import Footer.jsx from Components folder
import { AlertModal } from "../../Components/Modal/Alert"; // Import Alert.jsx from Components folder

// Importing all Context API
import { AuthStatusManagementAPI } from "../../API/Context/Auth Status Management API"; // Import Auth Status Management API.jsx
import { DashboardComponentsStateManagerContext } from "../../API/Context/Dashboard Components  State Manager API"; // Import Dashboard Components State Manager API.jsx

// importing all sub components of Dashboard
import Dashboard_Overview from "../../Components/Dashboard Components/Dashboard Overview"; // Import Dashboard Overview.jsx
import ViewAllDomains from "../../Components/Dashboard Components/ViewAllDomains"; // Import ViewAllDomains.jsx

function Dashboard() {
  // initializing the context api
  let { authStatus } = useContext(AuthStatusManagementAPI); // Call Auth Status Management API.jsx
  let { DashboardDefaultPageState, UpdateDomainAddPageState } = useContext(
    DashboardComponentsStateManagerContext
  ); // Call Dashboard Components State Manager API.jsx

  return (
    <>
      {authStatus.Status === "Login Successfull" ? (
        <>
          {/* Switching between pages using context api */}

          {DashboardDefaultPageState === "default" ? (
            <>
              <Navbar CurrentNavbarName={`${authStatus.Name}'s Panel`} />
              <Dashboard_Overview />
            </>
          ) : DashboardDefaultPageState === "ViewAllDomain" ? (
            <>
             <Navbar CurrentNavbarName={`${authStatus.Name}'s Panel`} />
            <ViewAllDomains />
            </>
          ) : null}
        </>
      ) : (
        <AlertModal
          messsageTitle="Need Login to access this panel"
          MainMessage="This is control panel for registered user's only, please login to your account & access this page. Thank You"
          ButtonText="Login now"
          Path="/login"
          buttonColor="red"
        />
      )}
    </>
  );
}

export default Dashboard;
