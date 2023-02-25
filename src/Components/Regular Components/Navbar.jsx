import React, { memo } from "react"; // importing react
import PropTypes from 'prop-types'; // importing prop-types
import { Link, useLocation } from "react-router-dom"; // importing react-router-dom
import {AppLogo} from '../../Variables/Non-Changable Variables'; // importing non-changable variables

// Mobile Navbar opener
function MobileNavbaerOpener() {
  document.getElementById("Mobile-navbar").classList.toggle('hidden');
}

function Navbar({ CurrentNavbarName }) {
  const Location = useLocation(); // getting current location
  let PathChange; // declaring a variable
  let Pathname; // declaring a variable
  if (Location.pathname === "/") {
    // if current location is home page
    PathChange = "/login"; // then change path to login page
    Pathname = "Client panel"; // and change name to login
  } else if (Location.pathname === "/login") {
    // if current location is login page
    PathChange = "/signup"; // then change path to home page
    Pathname = "Create account"; // and change name to signup
  } else if (Location.pathname === "/signup") {
    // if current location is signup page
    PathChange = "/login"; // then change path to login page
    Pathname = "Client panel"; // and change name to login
  } else {
    PathChange = "/login"; // else change path to login page
    Pathname = "Client panel"; // and change name to login
  } // changing path and name according to current location

  return (
    <>
      <nav className="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 z-50 fixed top-0 w-full lg:shadow-lg shadow-2xl">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src={AppLogo}
              className="h-6 mr-3 sm:h-9"
              alt="maim_official_Logo"
            />
            <span className="text-black self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:text-gray-200">
              {CurrentNavbarName}
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            id="Mobile-navbar-opener"
            onClick={MobileNavbaerOpener}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="Mobile-navbar">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="bn6"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="bn6"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/plans"
                  className="bn6 mb-2"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="bn6"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to={PathChange}
                  className="bn6"
                >
                  {Pathname}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

// Default Props
Navbar.defaultProps = {
  CurrentNavbarName: "CapchaCode",
};

// Typechecking With PropTypes
Navbar.propTypes = {
  CurrentNavbarName: PropTypes.string
};

export default memo(Navbar);
