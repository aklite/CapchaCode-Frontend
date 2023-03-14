// importing all essentials react plugins
import React from "react";
import ReactDOM from "react-dom/client";
// importing Router file to Link all Routes with this app
import RouterFile from "./Router";

        /* importing all context api for provide access to whole application */

// import context api for provide access to whole application
import { AlertModalStateManagementAPI } from "./API/Context/Alert State Management API"; // Importing the Alert Modal State Management API
import { AuthStatusManagementAPIProvider } from "./API/Context/Auth Status Management API"; // Importing the Auth Status Management API
import { ForgetPasswordStateManagementAPI } from "./API/Context/Forget Password State API"; // Importing the Forget Password State Management API
import { DashboardComponentsStateManagerProviderFunction } from "./API/Context/Dashboard Components  State Manager API"; // Importing the Dashboard Components State Management API

// rendering the application
ReactDOM.createRoot(document.getElementById("ServerRender")).render(
  <React.StrictMode>
    <DashboardComponentsStateManagerProviderFunction>
      <AlertModalStateManagementAPI>
        <ForgetPasswordStateManagementAPI>
          <AuthStatusManagementAPIProvider>
            {/* linking all Routes with this application  */}
            <RouterFile />
            {/* linking all Routes with this application  */}
          </AuthStatusManagementAPIProvider>
        </ForgetPasswordStateManagementAPI>
      </AlertModalStateManagementAPI>
    </DashboardComponentsStateManagerProviderFunction>
  </React.StrictMode>
);
