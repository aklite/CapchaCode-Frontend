import { hostname } from "../../Variables/Non-Changable Variables"; // Import Non-Changable Variables

// POST Request Function
export const POST_Request = async (url, data) => {
  console.log(data);
  let response = await fetch(hostname + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let result = await response.json();
  return result;
};
