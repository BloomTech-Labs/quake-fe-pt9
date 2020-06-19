import React, { useState, useContext} from "react";
import axios from "axios";
import UserContext from '../contexts/UserContext';
import { NavLink, useHistory } from "react-router-dom";
import Header from './Header';
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const  {userData, setUserData}  = useContext(UserContext)

  const [auth, setAuth] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("https://epicentralpt9.herokuapp.com/api/auth/login", auth)
      .then(res => {
        console.log("res", res);
        localStorage.setItem("Authorization", res.data.token);
        setUserData({...userData, ...res.data.user});
        history.push("/");
      })
      .catch(err => {
        console.log(err);
        setMessage("Wrong password, or email");
      });
  };

  const handleInput = e => {
   setAuth({
      ...auth,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <Header/>
      <h3>Login to Epicenter</h3>
      <form className="login-form" type="submit" onSubmit={onSubmit}>
        <input
          type="text"
          value={auth.email}
          onChange={handleInput}
          name="email"
          placeholder="email"
        />
        <input
          type="password"
          value={auth.password}
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
    </>
  );
};

export default Login;
