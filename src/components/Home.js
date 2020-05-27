import React, { useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import WorldMap from "./WorldMap";
import WhatToDo from './WhatToDo';

const Home = (props) => {

  useEffect(()=> {
    axios
    .get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/Colorado.json?limit=2&access_token=pk.eyJ1IjoicnN3ODg4IiwiYSI6ImNrYWRhZmZ5NTA1eGcycmxkdTRnNWFhbHgifQ.svdNU6YRgTECe5sPaLxeMg`
    )
    .then((res) => {
      console.log("REZ- STATE", res.data.features[0].center );
      // props.setUserCoords(res.data[0] );
    });
  })
  
   
  return (
    <div className="home">
      <Header />

      <div className="img-div">
        <WorldMap />
        {/* <Login /> */}
      </div>
      <h1>Preparedness</h1>

      <div className="prepare">
        <div className="p-div">
          <p>
            With Epicentral you will be able to get the latest updates on
            earthquakes happening around the world in real time; as well as be
            able to get up to date information on how to be prepared, and what
            to do in the event of an earthquake.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
