import { useState } from "react";

export const Form = ({ getCredentials }) => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    getCredentials(email, pswd);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Email:</label>
      <input
        type="email"
        required
        placeholder="user@mail.com"
        autoComplete="off"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        required
        autoComplete="off"
        value={pswd}
        onChange={(event) => setPswd(event.target.value)}
      />
      <button>Login</button>
    </form>
  );
};
