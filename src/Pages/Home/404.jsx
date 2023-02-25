import React from "react"; // importing react
import Navbar from "../../Components/Regular Components/Navbar"; // importing navbar component
import Update_Document_Title from "../../API/Effect/Update Document Title"; // importing update document title function

function NotFound() {
  Update_Document_Title("404 - Page Not Found");
  return (
    <>
      <Navbar CurrentNavbarName="Page Not Found" />
      <div className="text-center bg-red-500 h-[100vh]">
        <h1 className="text-4xl font-bold text-yellow-300 pt-[20.25rem]">
          404
        </h1>
        <p className="text-2xl pt-5 text-white">This path is invalid</p>
      </div>
    </>
  );
}

export default NotFound;
