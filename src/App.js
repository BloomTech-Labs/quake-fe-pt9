import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Prepare from './components/Prepare';
import Fema from './components/Fema'

function App() {

  const [userCoords, setUserCoords] = useState([0,0])
  const [userData, setUserData] = useState({});

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home userCoords={userCoords} setUserCoords={setUserCoords} />
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login">
          <Login setUserData={setUserData} />
        </Route>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/dashboard">
          <Dashboard userCoords={userCoords} setUserCoords={setUserCoords} userData={userData} />
        </Route>
        <Route exact path="/prepare" component ={Prepare} />
        <Route exact path="/fema">
          <Fema userCoords={userCoords} setUserCoords={setUserCoords} />
        </Route>
        <Redirect to='/' />
      </Router>
    </div>
  );
}

export default App;
