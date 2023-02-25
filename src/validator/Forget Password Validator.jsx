// step 1 validator
export const First_Step_Validator = async (UserInputs) => {
  if (
    UserInputs.Email === "" ||
    UserInputs.Email === undefined ||
    UserInputs.Email === null ||
    UserInputs.Email.includes("@") === false ||
    UserInputs.Email.includes(".") === false ||
    UserInputs.PhoneNumber === "" ||
    UserInputs.PhoneNumber === undefined ||
    UserInputs.PhoneNumber === null ||
    UserInputs.PhoneNumber.length !== 10
  ) {
    return false;
  } else {
    return true;
  }
};

export const Third_Step_Validator_Final = async (UserInputs) => {
  if (
    UserInputs.AccountID === "" ||
    UserInputs.AccountID === null ||
    UserInputs.AccountID === undefined
  ) {
    return false;
  } else if (UserInputs.ClientNewPassword !== UserInputs.NewPassword) {
    return false;
  } else if (
    UserInputs.ClientNewPassword === "" ||
    UserInputs.ClientNewPassword === null ||
    UserInputs.ClientNewPassword === undefined
  ) {
    return false;
  } else if (
    UserInputs.NewPassword === "" ||
    UserInputs.NewPassword === null ||
    UserInputs.NewPassword === undefined
  ) {
    return false;
  } else if (
    UserInputs.SecretCode === "" ||
    UserInputs.SecretCode == null ||
    UserInputs.SecretCode === undefined
  ) {
    return false;
  } else {
    return true;
  }
};
