import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from '../contexts/UserContext';
import Header from './Header'
import "./Register.css";

const Register = () => {
  const history = useHistory();
  const  {setUserData}  = useContext(UserContext)
  const [auth, setAuth] = useState({
    password: "",
    email: "",
    city: "",
  });

  const handleInput = (e) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://epicentralpt9.herokuapp.com/api/auth/register", auth)
      .then((res) => {
        localStorage.setItem("token", res.data.token );
        setUserData({...res.data.user, coords: [0,0]});
        history.push("/")
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <Header/>
      <h1>Register</h1>
      <form className="reg-form" type="submit" onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          onChange={handleInput}
          value={auth.email}
          placeholder="email"
        />
        <input
          type="text"
          name="city"
          onChange={handleInput}
          value={auth.city}
          placeholder="city"
        />
        <input
          type="password"
          value={auth.password}
          name="password"
          onChange={handleInput}
          placeholder="password"
        />
        <button type="submit" onSubmit={onSubmit}>Enter</button>
      </form>
    </>
  );
};

export default Register
