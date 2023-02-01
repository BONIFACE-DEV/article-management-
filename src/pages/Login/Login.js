import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Header } from "semantic-ui-react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:3000/register");
      const user = data.find((u) => u.email === email && u.password === password);
      if (user) {
        navigate("/home");
      } else {
        setError("Email or password is incorrect");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Form onSubmit={handleSubmit} style={{ width: "50%" }}>
        <Header as='h1' style={{alignItems: 'center', justifyContent: 'center' }}>Login Form</Header>
        <Form.Field>
          <label>Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Field>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
