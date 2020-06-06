import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Prepare from "./components/Prepare";

// import Contact from "./components/Contact"; // move content to footer
// import Dashboard from "./components/Dashboard"; // replace with profile?
// import Fema from './components/Fema'; // make an option on the map page?

function App() {

  const [userCoords, setUserCoords] = useState([0,0]);
  const [userData, setUserData] = useState({});

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home userCoords={userCoords} setUserCoords={setUserCoords} userData={userData} />
        </Route>
        <Route exact path="/login">
          <Login setUserData={setUserData} />
        </Route>
        <Route exact path="/register">
          <Register setUserData={setUserData} />
        </Route>
        <Route exact path="/prepare" component ={Prepare} />
        <Redirect to='/' />
      </Router>
    </div>
  );
}

export default App;
