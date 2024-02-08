import { useState } from "react";

export default function Authenticate({ token, setToken }) {
  const [successMessage, setSuccessMassage] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function handleClick(e) {
    e.preventDefault();

    if (!token) {
      alert("Oops, please sign up first!");
      return;
    }
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
      setSuccessMassage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2 className="authenticate">Authenticate!</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}
