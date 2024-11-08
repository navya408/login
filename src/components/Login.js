import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        alert("Login successful!");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
       console.error("Connection error:", error);
      setError("Error connecting to server");
    }
  };
  

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth: "300px", margin: "auto", padding: "20px" },
  form: { display: "flex", flexDirection: "column" },
  inputContainer: { marginBottom: "15px" },
  input: { padding: "8px", width: "100%" },
  button: { padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none" },
  error: { color: "red" }
};

export default Login;
