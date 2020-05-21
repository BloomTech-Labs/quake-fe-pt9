import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {NavLink, Redirect} from 'react-router-dom';

import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import Dashboard from './Dashboard';
 
const Login = (props) => {
 
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState( 
    ''
  );

 
  const onSubmit = (e) => {
    e.preventDefault();
    
    axiosWithAuth()
    axios
 
      .post("https://epicentralpt9.herokuapp.com/api/users/login", user)
      .then((res) => {
         console.log("USER", user);
        localStorage.setItem("Authorization", res.data.user.token);
        localStorage.setItem("email", res.data.user.email)
        localStorage.setItem('id',res.data.user.user_id)
        localStorage.setItem('country', res.data.user.country)
        localStorage.setItem('city', res.data.user.city)
        
        props.history.push('/dashboard')
       })
       .catch((err) =>  setMessage('Wrong password, or email')
         );
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
        <h2>{message}</h2>
        <h3>Not Registered?</h3>
        <NavLink className = 'small-nav' to = "/register">Register</NavLink>

      </form>
      <Footer/>
     </div>
  );
};

export default Login;
