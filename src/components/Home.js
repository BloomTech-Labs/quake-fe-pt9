import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeafletMap from "./LeafletMap";
import Prepare from "./Prepare";
import Dropdown from "./Dropdown";

const Home = props => {
  return (
    <div className="home">
      <Header />
      <LeafletMap userCoords={props.userCoords} />
      <section>
        <h1>Preparedness</h1>
        <p>
          With Epicentral you will be able to get the latest updates on
          earthquakes happening around the world in real time; as well as be
          able to get up to date information on how to be prepared, and what to
          do in the event of an earthquake.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
