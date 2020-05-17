import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {NavLink, Redirect} from 'react-router-dom';

import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import Dashboard from './Dashboard';
 
const Login = (props) => {
  console.log("PROPS", props)

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

 
  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
     

      .post("https://epicentralpt9.herokuapp.com/api/users/login", user)
      .then((res) => {
        console.log("RES", res);
        console.log("USER", user);
        localStorage.setItem("Authorization", res.data.user.token);
        localStorage.setItem("email", res.data.user.email)
        props.history.push('/dashboard')
       })
       .catch((err) => console.log(err));
  };

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

// Temporary style to view content, remove once we style components
  let loginStyle = {
    background: 'orange',
    color: 'black'
  }

  return (
    < div style={loginStyle}>
    <Header/>
       <form className="login-form" type="submit" onSubmit={onSubmit}>
      <h3>Login to Epicenter</h3>

        <input
          type="text"
          value={user.email}
          onChange={handleInput}
          name="email"
          placeholder="email"
        />
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handleInput}
          placeholder="password"
        />
        <button className = 'enter' type="submit">Enter</button>
        <h3>Not Registered?</h3>
        <NavLink className = 'small-nav' to = "/register">Register</NavLink>

      </form>
      <Footer/>
     </div>
  );
};

export default Login;
