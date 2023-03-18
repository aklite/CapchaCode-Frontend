import Registration_validator from "../../validator/Registration validation"; // Import Registration validation.jsx

// importing HTTP Request Sender Functions
import { POST_Request } from "../HTTP Request Sender/POST Request Sender"; // Post Request Sender
import { PUT_Request } from "../HTTP Request Sender/PUT Request Sender"; // Put Request Sender
// Context API

// Signup verification Function through POST Request Sender
export async function Signup_Function(UserDataJSON) {
  let Verification_Status = Registration_validator(UserDataJSON); // Call Registration validation.jsx
  if (Verification_Status === true) {
    let tempresponse = confirm("Are you sure? your data is correct?");
    if (tempresponse) {
      let response = await POST_Request(
        `/live/put/auth/CreateCustomerAccount`,
        UserDataJSON
      );
      return response;
    } else {
      alert("Please check your data again!");
    }
  } else if (Verification_Status === false) {
    console.log("Failed to verify data");
  }
}

// Login verification Function through POST Request Sender
export async function Login_Function(UserDataJSON) {
  let response = await POST_Request(
    `/live/post/auth/ClientLogin`,
    UserDataJSON
  );
  if (response.Status === "Login Successfull") {
    return {
      MetaData: response,
      Stat: "Login Successfull",
      Description: "You have been logged in successfully!",
      Status: true,
    };
  } else if (response.Status === "Secret Code Incorrect") {
    return {
      Stat: "Secret Code Incorrect",
      Description:
        "Please check your secret code again! or contact us for more information.",
      Status: false,
    };
  } else if (response.Status === "Password Incorrect") {
    return {
      Stat: "Password Incorrect",
      Description:
        "Please check your password again! or contact us for more information.",
      Status: false,
    };
  } else if (response.Status === "Account Not Found") {
    return {
      Stat: "Account Not Found",
      Description:
        "Please check your email again! or contact us for more information.",
      Status: false,
    };
  }
}

// get user's security questions for forget password page through POST Request Sender
export async function Get_Security_Questions_Function_For_Forget_Password(
  UserDataJSON
) {
  let Response = await PUT_Request(
    "/live/put/auth/ForgotPassword",
    UserDataJSON
  );
  if (Response.message === "Account not found") {
    return {
      Title: "Account not found",
      Description:
        "Please check your email again ! or contact us for more information.",
    };
  } else {
    return {
      Questions: {
        Question1: Response.Question1,
        Question2: Response.Question2,
        Answer1: Response.Answer1,
        Answer2: Response.Answer2,
      },
      AccountDetails: {
        AccountID: Response.AccountID,
        Name: Response.Name,
        SecretCode: Response.SecretCode,
      },
    };
  }
}

// Updating User's Password & Secret Code in Forget Password Section through PUT Request Sender
export async function Update_User_Password_And_Secret_Code_Function(
  UserDataJSON
) {
  let Forgret_User_Pass_Update_Response = await PUT_Request(
    "/live/put/auth/UpdatePasswordandSecretCode",
    UserDataJSON
  ); // Sending Request to Server
  return Forgret_User_Pass_Update_Response;
} // Updating User's Password & Secret Code in Forget Password Section
