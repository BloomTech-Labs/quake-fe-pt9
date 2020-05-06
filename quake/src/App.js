import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
