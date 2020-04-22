import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

 
  const onSubmit = (e) => {
    e.preventDefault();
    // axiosWithAuth()
    axios
      .post("http://localhost:3300/api/users/login", user)
      .then((res) => {
        console.log("RES", res.data);
        console.log("USER", user);
        localStorage.setItem("Authorization", res.data.user.token);
       })
      .catch((err) => console.log(err));
  };

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Login to Quake</h1>
      <form className="login-form" type="submit" onSubmit={onSubmit}>
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
        <button type="submit">Enter</button>
      </form>
     </>
  );
};

export default Login;
