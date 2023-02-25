// importing all essential packages & components
import React from "react"; // import react

// importing all essential variables
import { HeaderPhonePic } from "../../Variables/Non-Changable Variables"; // import HeaderPhonePic from Non-Changable Variables

// importing Link from react-router-dom
import { Link } from "react-router-dom"; // import Link from react-router-dom

// importing all essential css files
import "../../assets/custom css/home.css"; // import custom css file for home page

export function Futured_Component() {
  return (
    <div className="lg:mt-[5.25rem] md:mt-[7.25rem] mt-[5.25rem] lg:mb-[4.25rem]">
      <div id="top-container" className="lg:flex md:flex">
        <div className="lg:ml-5">
          <h1 className="mb-5  mx-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Looking for cheapest Captcha service ?{" "}
            <span className="text-blue-600 dark:text-blue-500">
              CapchaCode is the india's #1
            </span>{" "}
            Captcha Service Provider.
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl mx-5 dark:text-gray-400">
            {" "}
            CapchaCode provides you the best and cheapest primium captcha in
            india.
          </p>

          <blockquote className="text-xl mx-5 my-5 italic font-semibold text-gray-900 dark:text-white">
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <p>
              " capcha code is an online service that makes online forms easy
              for website owners, individuals and businesses. We provide
              simple-to-use, cost effective and hassle free captcha services for
              any ecommerce website across the world."
            </p>
          </blockquote>
          <div className="my-7 flex w-full space-x-10 ml-2">
            <Link to="/signup" className="button-72">
              Signup Now
            </Link>
            <Link to="/plans" className="button-72">
              View Pricing
            </Link>
          </div>
        </div>
        <img
          className="h-auto w-96 lg:w-[47%] rounded-lg shadow-xl dark:shadow-gray-800 mr-[2.25rem] lg:mb-4 mb-[10.25rem]"
          src={HeaderPhonePic}
          alt="human with computer"
        ></img>
      </div>
    </div>
  );
}
