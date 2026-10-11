import React, { useRef, useState } from "react";

function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedData({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  }

  return (
    <div className="login-card">
      <div className="login-icon">🔐</div>

      <h1>Welcome Back!</h1>
      <p className="subtitle">Login to your account</p>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          ref={usernameRef}
          placeholder="Enter your username"
          required
        />

        <label>Password</label>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login →</button>
      </form>

      {submittedData && (
        <div className="result-box">
          <h3>Login Submitted Successfully!</h3>
          <p>
            <strong>Username:</strong> {submittedData.username}
          </p>
          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;