import React, { useState } from "react";
import LogInForm from "./LogInForm";

function LogIn() {
  const adminUser = {
    username: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ username: "", name: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      console.log("Logged In");
      setUser({
        username: details.username,
        name: details.name,
      });
    } else {
      console.log("Information Does Not Match!");
      setError("Information Does Not Match!");
    }
  };

  const Logout = () => {
    setUser({ username: "", password: "" });
  };

  return (
    <div>
      {user.username != "" ? (
        <div>
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>LOGOUT</button>
        </div>
      ) : (
        <LogInForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default LogIn;
