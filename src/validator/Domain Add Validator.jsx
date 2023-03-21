// Description: This file used for validate domain add form.

export default function DomainAddValidator(DomainData) {
    if(DomainData.Email === "" || DomainData.Email === null || DomainData.Email === undefined || DomainData.Email.includes("@") === false || DomainData.Email.includes(".") === false) {
        alert("Please Enter Valid Email Address");
        return false;
    }
    else if(DomainData.AccountID === "" || DomainData.AccountID === null || DomainData.AccountID === undefined) {
        alert("Please login with Valid Account ID");
        return false;
    }
    else if(DomainData.CaptchaType === "" || DomainData.CaptchaType === null || DomainData.CaptchaType === undefined) {
        alert("Please Select Captcha Type");
        return false;
    }
    else if(DomainData.DomainName === "" || DomainData.DomainName === null || DomainData.DomainName === undefined || DomainData.DomainName.includes(".") === false) {
        alert("Please Enter Valid Domain Name");
        return false;
    }
    else{
        return true;
    }
} // export default function DomainAddValidator(DomainData) {}