import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobalContext } from "../context";
import {Link} from "react-router-dom";
// import jsonwebtoken from "../../../backend/node_modules/jsonwebtoken";
import jsonwebtoken from 'jsonwebtoken';
import axios from "axios";

function LoginComp() {
  const { state, dispatch } = useGlobalContext();

  const onSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: state.userEmail,
      password: state.userPassword,
    };

    axios
      .post(`http://134.209.98.150/api/users/login/`, data)
      .then((res) => {
        console.log(res.data.user);
        dispatch({ type: "setToken", payload: res.data.user.token });
        dispatch({
          type: "setDecodedValues",
          payload: jsonwebtoken.decode(res.data.user.token),
        });
        dispatch({ type: "setUserPasswordNull" });
        localStorage.setItem("token", res.data.user.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ width: "40%", margin: "auto", marginTop: "36px" }}>
      <Form>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="userEmail"
            value={state.userEmail}
            onChange={(event) =>
              dispatch({ type: "handleChange", payload: event })
            }
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
            value={state.userPassword}
            onChange={(event) =>
              dispatch({ type: "handleChange", payload: event })
            }
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Login
        </Button>
        <div style={{ marginTop: "16px" }}>
          <Link to="/register">Don't have an account?</Link>
        </div>
      </Form>
    </div>
  );
}

export default LoginComp;
