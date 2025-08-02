/*import React , {useState} from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
  const [credentials, setCredentials] = useState({
      
      email: "",
      password: "",
      
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!credentials.email || !credentials.password ) {
        alert("Please fill all the fields");
        return;
      }
  
      try {
        const response = await fetch("http://localhost:5000/api/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           
            email: credentials.email,
            password: credentials.password,
            
          })
        });
  
        const json = await response.json();
        console.log(json);
  
        if (!json.success) {
          alert("Enter Valid Credentials");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        alert("Something went wrong. Try again later.");
      }
    };
  
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
    
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            value={credentials.email}
            onChange={onChange}
            autoComplete="username"
          />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            name="password"
            value={credentials.password}
            onChange={onChange}
            autoComplete="current-password"
          />
        </div>

        

        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to='/Signup' className='m-3 btn btn-danger'>New User</Link>
      </form>
    </div>
  )
}

export default Login
*/

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
 let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      alert("Please fill all the fields");
      return;
    }

    try {
      
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter Valid Credentials");
      } else {
        navigate("/");
        // Optionally save auth token or navigate to another page
        // localStorage.setItem("authToken", json.authToken);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            value={credentials.email}
            onChange={onChange}
            autoComplete="username"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            name="password"
            value={credentials.password}
            onChange={onChange}
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to='/Signup' className='m-3 btn btn-danger'>New User</Link>
      </form>
    </div>
  );
};

export default Login;

