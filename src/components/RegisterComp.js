import React, { useState } from "react";
import {} from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

function RegisterComp() {
  const [registerDetails, setRegisterDetails] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: registerDetails.userEmail,
      username: registerDetails.userName,
      password: registerDetails.userPassword,
    };
    axios
      .post(`http://134.209.98.150/api/users/`, data)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ width: "40%", margin: "auto", marginTop: "36px" }}>
      <Form>
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            id="userName"
            value={registerDetails.userName}
            onChange={(event) => {
              setRegisterDetails((prevState) => {
                return { ...prevState, [event.target.id]: event.target.value };
              });
            }}
            type="text"
            placeholder="Enter your Name"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="userEmail"
            value={registerDetails.userEmail}
            onChange={(event) => {
              setRegisterDetails((prevState) => {
                return { ...prevState, [event.target.id]: event.target.value };
              });
            }}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="userPassword"
            value={registerDetails.userPassword}
            onChange={(event) => {
              setRegisterDetails((prevState) => {
                return { ...prevState, [event.target.id]: event.target.value };
              });
            }}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Register
        </Button>
        <div style={{ marginTop: "16px" }}>
          <Link to="/">Already have an account?</Link>
        </div>
      </Form>
    </div>
  );
}

export default RegisterComp;
