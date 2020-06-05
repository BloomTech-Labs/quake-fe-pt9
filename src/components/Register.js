import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const history = useHistory();

  const [userData, setUserData] = useState({
    password: "",
    email: "",
    city: "",
  });

  const handleInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://epicentralpt9.herokuapp.com/api/users/register", userData)
      .then((res) => {
        localStorage.setItem("token", res.data );
        props.setUserData(userData);
        history.push('/dashboard')
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Register</h1>
      <form className = 'reg-form'type="submit" onSubmit={onSubmit}>
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
          type="password"
          value={userData.password}
          name="password"
          onChange={handleInput}
          placeholder="password"
        />
        <button type = 'submit' onSubmit = {onSubmit}>Enter</button>
      </form>
    </>
  );
};

export default Register
