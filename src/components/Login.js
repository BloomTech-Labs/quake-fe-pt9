import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

const Login = props => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("https://epicentralpt9.herokuapp.com/api/users/login", user)
      .then(res => {
        localStorage.setItem("Authorization", res.data.user.token);
        props.setUserData(res.data.user);
        history.push("/dashboard");
      })
      .catch(err => setMessage("Wrong password, or email"));
  };

  const handleInput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <Header />
      <h3>Login to Epicenter</h3>
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
        <button className="enter" type="submit">
          Enter
        </button>
        <h2>{message}</h2>
        <h3>Not Registered?</h3>
        <NavLink className="small-nav" to="/register">
          Register
        </NavLink>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
