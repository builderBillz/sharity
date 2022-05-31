import React, { useState } from "react";

function LogInForm({ Login, error }) {
  const [details, setDetails] = useState({ username: "" });

  const submitHandler = (event) => {
    event.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2>Sign In</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
      </div>

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="name"
          name="name"
          id="name"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
      </div>

      <div>
        <label htmlFor="userName">Username:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
          value={details.username}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>

      <div>
        <input type="submit" value="SIGN IN" />
      </div>
    </form>
  );
}

export default LogInForm;
