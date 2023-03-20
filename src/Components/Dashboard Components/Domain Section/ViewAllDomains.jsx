// importing all essential modules
import React, { useContext } from "react"; // Importing React,  useContext & useState hook
// import Button from Matreial UI
import {Link} from 'react-router-dom'; // Importing Link from react-router-dom

// importing all essential APIs from the API folder
import { AuthStatusManagementAPI } from "../../../API/Context/Auth Status Management API"; // Importing Auth Status Management API
import { DashboardComponentsStateManagerContext } from "../../../API/Context/Dashboard Components  State Manager API"; // Import Dashboard Components State Manager API.jsx

import Update_Title from "../../../API/Effect/Update Document Title"; // Import Update Document Title.jsxx

// importing Sidebar & Navbar components
import Sidebar from "../Sidebar/Sidebar"; // Importing Sidebar component

export default function ViewAllDomains() {
  let { FullaccountDetails, authStatus } = useContext(AuthStatusManagementAPI); // Destructuring Auth Status Management API
  let { UpdateDefaultPageState } = useContext(
    DashboardComponentsStateManagerContext
  ); // Call Dashboard Components State Manager API.jsx

  // update Page Title
  Update_Title(`View All Domains - ${authStatus.Name}`); // updating the document title
  return (
    <>
      <Sidebar />
      <div className="relative overflow-x-auto sm:rounded-lg lg:ml-[17.25rem] mx-5 mt-[1rem] lg:mt-[7.50rem] shadow-2xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Domain Name
              </th>
              <th scope="col" className="px-6 py-3">
                Captcha Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {FullaccountDetails.DomainDetails.map((SingleDomainData, Key) => {
              return (
                <tr key={Key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        {SingleDomainData.Hostname}
                      </div>
                      <div className="font-normal text-gray-500">
                        {SingleDomainData.AddedDate}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{SingleDomainData.CaptchaType}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        className={`${
                          SingleDomainData.Status === true
                            ? "bg-green-500 h-2.5 w-2.5 rounded-ful mr-2"
                            : "bg-red-500 h-2.5 w-2.5 rounded-ful mr-2"
                        }`}
                      ></div>{" "}
                      {SingleDomainData.Status === true ? "Active" : "Inactive"}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                  <Link className="bg-green-500 text-white px-10 py-2 rounded-full" to={`/Domains/${SingleDomainData._id}`}> Go </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
