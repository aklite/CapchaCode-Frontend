import { hostname } from "../../Variables/Non-Changable Variables"; // Import Non-Changable Variables

// POST Request Function
export const PUT_Request = async (url, data) => {
  let response = await fetch(hostname + url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let result = await response.json();
  return result;
};
