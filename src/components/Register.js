import React, { useState } from "react";
import axios from "axios";
import Header from './Header';
import Footer from './Footer';

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Register = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    city: "",
    country: "",
    phone: "",
  });

  const handleInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    // axios
      .post("http://localhost:3300/api/users/register", userData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err));
    console.log("USER", userData);
  };

  return (
    <div className = 'reg-div'> 
    <Header/>
      <h1>Register</h1>
      <form className = 'reg-form'type="submit" onSubmit={onSubmit}>
        <input
          type="text"
          name="first_name"
          onChange={handleInput}
          value={userData.first_name}
          placeholder="first_name"
        />
        <input
          type="text"
          name="last_name"
          onChange={handleInput}
          value={userData.last_name}
          placeholder="last_name"
        />

        
        <input
          type="text"
          name="email"
          onChange={handleInput}
          value={userData.email}
          placeholder="email"
        />
        <input
          type="text"
          name="city"
          onChange={handleInput}
          value={userData.city}
          placeholder="city"
        />

        <input
          type="text"
          name="country"
          onChange={handleInput}
          value={userData.country}
          placeholder="country"
        />

        <input
          type="password"
          value={userData.password}
          name="password"
          onChange={handleInput}
          placeholder="password"
        />

        <button type = 'submit' onSubmit = {onSubmit}>Enter</button>
      </form>
      <Footer/>
      </div>
  );
};

export default Register
