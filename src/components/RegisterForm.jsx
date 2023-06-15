import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./RegisterForm.css";
import GoogleLogo from "../assets/google.png";
import { useDispatch } from "react-redux";
import { register } from "./action";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      register({
        username: username,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="container ">
      <Card className="register-form">
        <Card.Body>
          <h2 className="card-title">Register</h2>
          <h6 className="card-subtitle text-muted mb-5 fw-bold">
          Create new account to access this web!
          </h6>

          <div className="d-grid mt-5 mb-5">
            <Button className="btn-gmail" variant="light" type="submit">
              <img src={GoogleLogo} className="img-google me-2" alt="gmail" />
              Register with Gmail
            </Button>
          </div>

          <Form onSubmit={(e)=>handleSubmit(e)}>
            <Form.Group className="mb-4" controlId="formBasicUsername">
              <Form.Label className="form-label">Username</Form.Label>
              <Form.Control
                className="form-control"
                type="username"
                placeholder="Username"
                username={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                className="form-control"
                type="email"
                placeholder="Email"
                email={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label className="form-label">Password*</Form.Label>
              <Form.Control className="form-control" type="password" placeholder="Min 8 Character"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
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
              Register
              </Button>
            </div>

            <div className="mt-3">
              <label>
                Already have an account?
                <Button className="link" variant="link">
                Login
                </Button>
              </label>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegisterForm;