import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import the CSS file
import Validation from "./LoginValidation.js";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()


  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {console.log(result)
        if (result.data === "Success") {
            navigate('/dashboard')
        }
    
})
.catch((err) => {
    console.log(err);
  });
  
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit} className="form-name">
          <div className="form-group">
            <label className="lbl" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            /> <br />
            <span className='error-message'>
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </span>
          </div>
          <div className="form-group">
            <label className="lbl" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            /> <br />
            <span className='error-message'>
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </span>
          </div>
          <button type="submit" className="btn btn-success">
            Log in
          </button>
          <p>You agree to our terms and policies</p>
          <Link to="/sign-up" className="create-account-link">
            Create account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
