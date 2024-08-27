/*

// // LoginForm.js
import { useState } from "react";
//import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../service/userservice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import login1 from "../images/login1.png";
import mainbg from "../images/mainbg.jpg";
import { Col, Container, Row, Form } from "react-bootstrap";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const [loginError, setLoginError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(formData, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid formData.");
    } else {
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }

    // e.preventDefault();
    // try {
    //   const result = await login(formData);
    //   console.log(result);
    //   setFormData({ email: "", password: "" });
    //   localStorage.setItem("token", result.token);
    //   //navigate(`//${formData.email}`);
    //   navigate("/");
    // } catch (error) {
    //   setLoginError(true);
    //   setTimeout(() => {
    //     alert("Email or Password is not valid.");
    //   }, 1000);
    //   console.log(error);
    // }
  };

  return (
    <div>
      <div
        className="row g-0 justify-content-center align-items-center bg-info vh-100"
        style={{
          backgroundImage: "url(" + mainbg + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <div
          className=" d-flex justify-content-center align-items-center"
          style={{
            width: "50%",
            height: "60%",
          }}
        >
          <form className="col-6" onSubmit={handleSubmit}>
            <div className="text-center">
              <img
                src={login1}
                alt=""
                className="img-fluid bg-light"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>

            <h3
              className="login-title text-center py-2 mb-4 text-light"
              style={{ borderBottom: "3px solid #19891c" }}
            >
              Login to LikeKofiee
            </h3>

            <Container id="containerlogin" className="wrapper">
              <Row>
                <Col>
                  <Form onSubmit={handleSubmit} id="form">
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="text"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-around">
                      <button type="submit" className=" btn btn-success">
                        Login
                      </button>
                      <Link to="/signup" className=" btn btn-danger">
                        SignUp
                      </Link>
                    </div>
                  </Form>

                  {loginError ? alert("Email or Password is not valid.") : null}
                </Col>
              </Row>
            </Container>
          </form>
        </div>
      </div>
    </div>
  );
}

*/


import React, { useState } from "react";
import login1 from "../images/login1.png";
import mainbg from "../images/mainbg.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid credentials.");
    } else {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div
        className="row g-0 justify-content-center align-items-center bg-info vh-100"
        style={{
          backgroundImage: "url(" + mainbg + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <div
          className=" d-flex justify-content-center align-items-center"
          style={{
            width: "50%",
            height: "60%",
            
          }}
        >
          <form className="col-6" onSubmit={handleSubmit}>
            <div className="text-center">
              <img
                src={login1}
                alt=""
                className="img-fluid bg-light"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>

            
            <h3 className="login-title text-center py-2 mb-4 text-light" style={{ borderBottom: "3px solid #19891c" }} >

              Login to LikeKofiee

            </h3>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Username"
                value={credentials.email}
                onChange={onChange}
              />
              <label htmlFor="email">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control mb-3"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={onChange}
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="d-flex justify-content-around">
              <button type="submit" className=" btn btn-success">
                Login
              </button>
              <Link to="/createuser" className=" btn btn-danger">
                SignUp
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}



