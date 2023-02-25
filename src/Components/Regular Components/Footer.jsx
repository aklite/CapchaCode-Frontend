import React, { memo } from "react"; // importing react
import { Link } from "react-router-dom"; // importing react-router-dom
import { AppName } from "../../Variables/Non-Changable Variables"; // importing non-changable variables

function Footer({FooterStyle}) {
  return (
    <>
      <footer className={FooterStyle+" p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 z-50 dark:bg-gray-800"}>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            {AppName + "™"}
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/About" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link to="/PrivacyPolicy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/RefundPolicy" className="mr-4 hover:underline md:mr-6">
              Refund policy
            </Link>
          </li>
          <li>
            <Link to="/help" className="hover:underline">
              Help Center
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}

Footer.defaultProps = {
  FooterStyle: "fixed bottom-0 w-full"
}
// exporting the component
export default memo(Footer);
