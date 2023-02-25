import React from "react"; // Import React

function Validation(AllDataJSON) {
  if (
    AllDataJSON.Name === "" ||
    AllDataJSON.Name === null ||
    AllDataJSON.Name === undefined
  ) {
    alert("Name is required");
    return false;
  } else if (
    AllDataJSON.Email === "" ||
    AllDataJSON.Email === null ||
    AllDataJSON.Email === undefined
  ) {
    alert("Email is required");
    return false;
  } else if (
    AllDataJSON.PhoneNumber === "" ||
    AllDataJSON.PhoneNumber === null ||
    AllDataJSON.PhoneNumber === undefined ||
    AllDataJSON.PhoneNumber.length < 10 ||
    AllDataJSON.PhoneNumber.length > 10
  ) {
    alert("Phone Number is required");
    return false;
  } else if (
    AllDataJSON.Password === "" ||
    AllDataJSON.Password === null ||
    AllDataJSON.Password === undefined ||
    AllDataJSON.Password.length < 6
  ) {
    alert("Password style is not correct");
    return false;
  } else if (AllDataJSON.Password !== AllDataJSON.CustomerPassword) {
    alert("Password and Confirm Password are not same");
    return false;
  } else if (
    AllDataJSON.Address === "" ||
    AllDataJSON.Address === null ||
    AllDataJSON.Address === undefined
  ) {
    alert("Address is required");
    return false;
  } else if (
    AllDataJSON.Birthday === "" ||
    AllDataJSON.Birthday === null ||
    AllDataJSON.Birthday === undefined
  ) {
    alert("Birthday is required");
    return false;
  } else if (
    AllDataJSON.SecretCode === "" ||
    AllDataJSON.SecretCode === null ||
    AllDataJSON.SecretCode === undefined
  ) {
    alert("Secret Code is required");
    return false;
  } else if (
    AllDataJSON.City === "" ||
    AllDataJSON.City === null ||
    AllDataJSON.City === undefined
  ) {
    alert("City is required");
    return false;
  } else if (
    AllDataJSON.State === "" ||
    AllDataJSON.State === null ||
    AllDataJSON.State === undefined
  ) {
    alert("State is required");
    return false;
  } else if (
    AllDataJSON.Pincode === "" ||
    AllDataJSON.Pincode === null ||
    AllDataJSON.Pincode === undefined
  ) {
    alert("Pincode is required");
    return false;
  } else if (AllDataJSON.isTermsConditionAgreed === false) {
    alert("Please agree to terms and conditions");
    return false;
  } else if (
    AllDataJSON.Question1 === "" ||
    AllDataJSON.Question1 === null ||
    AllDataJSON.Question1 === undefined ||
    AllDataJSON.Question1 === "Select a security question"
  ) {
    alert("Security Question is required");
    return false;
  } else if (
    AllDataJSON.Question2 === "" ||
    AllDataJSON.Question2 === null ||
    AllDataJSON.Question2 === undefined ||
    AllDataJSON.Question2 === "Select a security question"
  ) {
    alert("Security Question is required");
    return false;
  } else if (
    AllDataJSON.Answer1 === "" ||
    AllDataJSON.Answer1 === null ||
    AllDataJSON.Answer1 === undefined
  ) {
    alert("Security Answer is required");
    return false;
  } else if (
    AllDataJSON.Answer2 === "" ||
    AllDataJSON.Answer2 === null ||
    AllDataJSON.Answer2 === undefined
  ) {
    alert("Security Answer is required");
    return false;
  } else {
    return true;
  }
} // End of Validation function

export default Validation;
