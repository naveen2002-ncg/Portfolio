import { useState } from "react";
import "./Task3.css";

function Task3() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (username === "Naveen" && password === "1234") {
      setMessage("Login Successful🎉!!!");
    } else {
      setMessage("Invalid Credentials");
    }
  };

  return (
    <div className="task3-container">
      <h2 className="login-msg">
        Please Login
      </h2>

      <div className="login-form">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p className="message">
          {message}
        </p>
      </div>
    </div>
  );
}

export default Task3;