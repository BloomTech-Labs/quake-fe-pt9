import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import WorldMap from "./WorldMap";


const Home = () => {
  return (
    <div className="home">
      <Header/>
      
      <div className="img-div">
        <WorldMap />
        {/* <Login /> */}
      </div>
      <h1>Preparedness</h1>

      <div className="prepare">
        <div className="p-div">
          <p>
          With Epicentral you will be able to get the latest updates on earthquakes happening around the world in real time;
           as well as be able to get up to date information on how to be prepared, and what to do in the event of an earthquake.
          </p>
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default Home;
