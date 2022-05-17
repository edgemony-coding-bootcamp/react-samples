import { useState, useEffect } from "react";
import { Form } from "./form";
import { List } from "./list";

export const Login = () => {
  const [credentials, setCredentials] = useState({});
  const [token, setToken] = useState("");
  const [todos, setTodos] = useState([]);

  const getCredentials = (email, pswd) => {
    setCredentials({
      email: email,
      password: pswd,
    });
  };

  useEffect(() => {
    if (credentials.email && credentials.password) {
      fetch("https://edgemony-backend.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((response) => response.json())
        .then((data) => setToken(data.accessToken));
    }
  }, [credentials]);

  useEffect(() => {
    if (token.length > 0) {
      fetch("https://edgemony-backend.herokuapp.com/440/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setTodos(data));
    }
  }, [token]);

  return (
    <div>
      <h2>Login</h2>
      {token.length === 0 && <Form getCredentials={getCredentials} />}
      {token.length !== 0 && (
        <div>
          <List todos={todos} />
          <button onClick={() => setToken("")}>Logout</button>
        </div>
      )}
    </div>
  );
};
