import React, { useEffect } from "react";
import axios from "axios";
import Header from "./Header.js";
import Footer from "./Footer.js";
import LeafletMap from "./LeafletMap.js";
import Search from "./Search.js";

// TODO: Create a utils file to hold the various axios calls and other helpers?

const Home = props => {
  useEffect(() => {
    if (props.userData.city) {
      // This is where we fetch the coordinates from a city name.
      axios
        .get(
          // TODO: Hide access token?
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${props.userData.city}.json?limit=2&access_token=pk.eyJ1IjoicnN3ODg4IiwiYSI6ImNrYWRhZmZ5NTA1eGcycmxkdTRnNWFhbHgifQ.svdNU6YRgTECe5sPaLxeMg`
        )
        .then(res => {
          props.setUserCoords(res.data.features[0].center);
        });
    }
  }, [props.userData.city, props]);

  return (
    <>
      <Header />
      {props.userData.email ? (
        <p>
          Welcome {props.userData.email} from {props.userData.city}!
        </p>
      ) : null}
      <Search setUserCoords={props.setUserCoords} />
      <LeafletMap userCoords={props.userCoords} />
      <section>
        <p>
          With Epicentral you will be able to get the latest updates on
          earthquakes happening around the world in real time; as well as be
          able to get up to date information on how to be prepared, and what to
          do in the event of an earthquake.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Home;
