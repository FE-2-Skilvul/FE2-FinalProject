import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./LoginForm.css";
import GoogleLogo from "../assets/google.png";
import { useDispatch } from "react-redux";
import { login } from "./action";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="container">
      <Card className="login-form">
        <Card.Body>
          <h2 className="card-title">Login</h2>
          <h6 className="card-subtitle text-muted mb-5 fw-bold">
            Please login to use this site!
          </h6>

          <div className="d-grid mt-5 mb-5">
            <Button className="btn-gmail" variant="light" type="submit">
              <img src={GoogleLogo} className="img-google me-2" alt="gmail" />
              Login with Gmail
            </Button>
          </div>

          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="form-label">Email*</Form.Label>
              <Form.Control
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-label">Password*</Form.Label>
              <Form.Control
                className="form-control"
                type="password"
                placeholder="Min 8 Character"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Remember Me" />
              <Button className="link" variant="link">
                Forgot Password
              </Button>
            </Form.Group>

            <div className="d-grid mt-5">
              <Button className="btn-login" variant="success" type="submit">
                Login
              </Button>
            </div>

            <div className="mt-3">
              <label>
                Not Registered yet?
                <Button className="link" variant="link">
                  Create account
                </Button>
              </label>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;
