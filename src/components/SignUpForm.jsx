import { useState } from "react";

export default function SignUpForm({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username || username.length < 8 || !password || password.length < 8) {
      alert(
        "Please make sure both username and password are at least 8 characters long"
      );
      return;
    }
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          body: JSON.stringify({
            username: "",
            password: "",
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>submit</button>
      </form>
    </>
  );
}
