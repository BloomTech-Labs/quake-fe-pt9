import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeafletMap from "./LeafletMap";
import axios from "axios";
import Search from "./Search";

const Dashboard = props => {
  const user = props.userData;
  // This is where we fetch the coordinates from a city name.
  useEffect(() => {
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${user.city}.json?limit=2&access_token=pk.eyJ1IjoicnN3ODg4IiwiYSI6ImNrYWRhZmZ5NTA1eGcycmxkdTRnNWFhbHgifQ.svdNU6YRgTECe5sPaLxeMg`
      )
      .then(res => {
        props.setUserCoords(res.data.features[0].center);
      });
  }, [props]);

  return (
    <div className="home">
      <Header />
      <h1>Dashboard</h1>
      <h2>Welcome {user.email}!</h2>
      <h3>Location: {user.city}, {user.country}</h3>
      <Search setUserCoords={props.setUserCoords} />
      <LeafletMap userCoords={props.userCoords} />
      <Footer />
    </div>
  );
};

export default Dashboard;
