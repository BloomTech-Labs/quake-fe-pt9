import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Prepare from "./components/Prepare";
import UserContext from './contexts/UserContext';

// import Contact from "./components/Contact"; // move content to footer
// import Dashboard from "./components/Dashboard"; // replace with profile?
// import Fema from './components/Fema'; // make an option on the map page?

function App() {
  const [userData, setUserData] = useState({coords: [0, 0], zoom: 1});

  return (
    <div className="App">
      <UserContext.Provider value={{userData, setUserData}} >
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/prepare" component={Prepare} />
            <Redirect to='/' />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
