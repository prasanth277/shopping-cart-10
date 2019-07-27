import * as Cookies from "js-cookie";

export default function NormalAPICall(endPoint) {
  const options = {
    method: "POST",
    headers: {
      authorization: Cookies.get("loginUser"),
      "Content-Type": "application/json"
    }
  };
  return fetch(endPoint, options);
}
