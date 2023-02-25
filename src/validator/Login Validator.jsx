export default async function LoginDataValidator(JSONData) {
  if (
    JSONData.Email === "" ||
    JSONData.Password === "" ||
    JSONData.Passcode === ""
  ) {
    return false;
  } else {
    return true;
  }
}
