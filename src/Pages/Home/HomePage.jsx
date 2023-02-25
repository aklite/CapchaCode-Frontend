import React from "react"; // importing react

// importing all components
import Navbar from "../../Components/Regular Components/Navbar"; // import Navbar component
import Footer from "../../Components/Regular Components/Footer"; // import Footer component
import { Futured_Component } from "../../Components/Homepage Components/Futured Component"; // import Futured_Component component
import { Steps_Tutorial } from "../../Components/Homepage Components/Steps Tutorial"; // import Steps_Tutorial component
import { Pricings_and_Packges } from "../../Components/Homepage Components/Pricings & Packges"; // import Pricings_and_Packges component
import { Our_team } from "../../Components/Homepage Components/Our team"; // import Our_team component

// importing all css
import "../../assets/custom css/home.css"; // import custom css
import "../../assets/custom css/Lightning Button.css"; // import custom css

// importing all effects
import Update_Document_Title from "../../API/Effect/Update Document Title";

//function HomePage starts here
function HomePage() {
  Update_Document_Title("CapchaCode - India's Most Affordable Captcha Service");
  return (
    <>
      <Navbar />
      <Futured_Component />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Steps_Tutorial />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Pricings_and_Packges />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Our_team />
      <Footer FooterStyle="static" />
    </>
  );
}

export default HomePage;
