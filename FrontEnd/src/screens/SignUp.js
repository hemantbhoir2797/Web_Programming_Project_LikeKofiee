/*
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { saveUser } from "../service/userservice";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import bg from "../images/about-banner.png";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import { Button, Container, Form } from "react-bootstrap";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // if (formData.password !== formData.confirmpassword) {
    //   alert('Passwords do not match.');
    //   return false;
    // }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }

    return true;
  };

  const validateEmail = () => {
    const emailRegex = /[^0-9][a-zA-Z0-9]+@(gmail.com|cdac.in)/;
    const isValid = emailRegex.test(formData.email);

    if (!isValid) {
      alert("Email is not valid.");
      return false;
    }

    return true;
  };

  const checkValidate = () => {
    // Calling validation functions directly
    return validateForm() && validateEmail();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (checkValidate()) {
        // Implement the saveUser function in your service to send data to the server
        const result = await saveUser(formData);

        console.log("Data submitted:", result);
        console.log("Data submitted:", formData);

        setFormData({
          name: "",
          email: "",
          password: "",
          location: "",
          address: "",
        });
        alert("Sign in Successful. Please Login Your Account.");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

<MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url(" + bg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
      }}
    >
      <MDBCard className="" style={{ width: "auto" , opacity:"0.9"}}>
        <MDBCardBody className="p-5">

          <h2
            className="text-uppercase text-center mb-4 fw-bolder"
            style={{ borderBottom: "3px solid green" }}
          >
            Register to LikeKofiee
          </h2>


      <div className="shero">
        <Container className="mb-5 mt-5" fluid>
          <div className="wrapper">
          <Form onSubmit={handleSubmit} id="form">
              
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button type="submit" className="btn">
                Sign Up
              </Button>

              <div className="register-link">
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </Form>
          </div>
        </Container>
      </div>

      </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
  );
}

export default SignUp;
*/



import React, { useState } from "react";
import bg from "../images/about-banner.png";
import "../register.css";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    address: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
        address: credentials.address,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Please enter valid information.");
    } else {
      alert("You are registered successfully!");
      navigate("/login");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  
  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url(" + bg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
      }}
    >
      <MDBCard className="" style={{ width: "auto" , opacity:"0.9"}}>
        <MDBCardBody className="p-5">

          <h2
            className="text-uppercase text-center mb-4 fw-bolder"
            style={{ borderBottom: "3px solid green" }}
          >
            Register to LikeKofiee
          </h2>
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="text"
              placeholder="Your Name"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="email"
              placeholder="Email Address"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="password"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="text"
              placeholder="Address"
              name="address"
              value={credentials.address}
              onChange={onChange}
            />
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="text"
              placeholder="Location"
              name="location"
              value={credentials.location}
              onChange={onChange}
            />
          </form>
          <div className="d-flex flex-row justify-content-center mb-2">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I agree all statements in Terms of service"
            />
          </div>
          <div className="text-center mb-2">
            <button className="btn btn-success w-100" onClick={handleSubmit}>Register</button>
          </div>
          <div className="text-center">
            Have already an account? <Link to="/login">Login here</Link>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;

