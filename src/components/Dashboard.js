import React, { useEffect } from "react";
import LeafletMap from "./LeafletMap";
import axios from "axios";
import Search from "./Search";

const Dashboard = props => {
  const user = props.userData;
  // This is where we fetch the coordinates from a city name.
  useEffect(() => {
    // TODO: Hide access token?
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
      <h1>Dashboard</h1>
      <p>Welcome {user.email}!</p>
      <Search setUserCoords={props.setUserCoords} />
      <LeafletMap userCoords={props.userCoords} />
    </div>
  );
};

export default Dashboard;
