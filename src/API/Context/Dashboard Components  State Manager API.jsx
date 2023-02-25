import React, { createContext, useState } from "react"; // Importing createContext and useState from react

// Creating a context
export const DashboardComponentsStateManagerContext = createContext(); // Creating a context

// creating a provider fyunction to wrap the components
export function DashboardComponentsStateManagerProviderFunction({ children }) {
  // Domain Add Page Components State Manager
  const [DashboardDefaultPageState, setDashboardDefaultPageState] =
    useState("default"); // Creating a state to store the dashboard components state
  const UpdateDefaultPageState = (PageNumber) =>
    setDashboardDefaultPageState(PageNumber); // Creating a function to update the state

  return (
    <DashboardComponentsStateManagerContext.Provider
      value={{
        DashboardDefaultPageState,
        UpdateDefaultPageState,
      }}
    >
      {children}
    </DashboardComponentsStateManagerContext.Provider>
  );
} // creating a provider fyunction to wrap the components
