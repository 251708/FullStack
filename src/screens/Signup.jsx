/*
import React , {useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [credentials, setcredentials] = useState({name:"" , email:"" , password:"", Geolocation:""})
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser",{
      method:'POST',
      header:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:credentials.name , email:credentials.email, password:credentials.password,location: credentials.Geolocation })
    });
    const json = await response.json()
    console.log(json);

    if(!json.success){
      alert("Enter Valid Credentials")
    }
  }

  const onChange = (event) => {
    setcredentials({...credentials , [event.target.name]:event.target.value})
  }
  return (
    <>
    <div className="container">
     <form>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name = 'name' value={credentials.name} onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='username'/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input
  type="password"
  className="form-control"
  name="password"
  value={credentials.password}
  onChange={onChange}
  id="exampleInputPassword1"
  autoComplete="current-password"
/>

  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputlocation" className="form-label">Address</label>
    <input
  type="text"
  className="form-control"
  id="geolocationInput"
  name="Geolocation"
  value={credentials.Geolocation}
  onChange={onChange}
/>
  </div>
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
<Link to = '/Login' className='m-3 btn btn-danger'>Already a user</Link>
</form> 
</div>
    </>
  )
}

export default Signup

*/


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    Geolocation: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.name || !credentials.email || !credentials.password || !credentials.Geolocation) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/creatuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.Geolocation
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
          <label htmlFor="nameInput" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            value={credentials.name}
            onChange={onChange}
            autoComplete="name"
          />
        </div>

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

        <div className="mb-3">
          <label htmlFor="geolocationInput" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="geolocationInput"
            name="Geolocation"
            value={credentials.Geolocation}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to='/Login' className='m-3 btn btn-danger'>Already a user</Link>
      </form>
    </div>
  );
};

export default Signup;
