import React from "react"; // import react

// importing all variables
import { Founders_Details } from "../../Variables/Non-Changable Variables"; // import all variables from Non-Changable Variables.jsx

export function Our_team() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We are always ready to serve you a hassle free high speed captcha
            service, meet our team ...
          </p>
        </div>
        <div className="flex flex-wrap -m-4 lg:ml-[25.25rem]">
          {Founders_Details.map((Founder, key) => {
            return (
              <div className="p-4 lg:w-1/4 md:w-1/2" key={key}>
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-50 mb-4"
                    src={Founder.Pic}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {Founder.Name}
                    </h2>
                    <h3 className="text-gray-500 mb-3">{Founder.Position}</h3>
                    <span className="inline-flex">
                      <a
                        className="text-gray-500"
                        href={Founder.Facebook}
                        target="_blank"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        className="ml-2 text-gray-500"
                        href={Founder.Twitter}
                        target="_blank"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
