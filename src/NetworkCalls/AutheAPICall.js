export default function AutheAPICall(endPoint, object) {
  const options = {
    method: "POST",
    body: JSON.stringify(object),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(endPoint, options);
}
