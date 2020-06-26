import React, { useEffect, useContext} from "react";
import axios from "axios";
import Header from "./Header.js";
import Footer from "./Footer.js";
import LeafletMap from "./LeafletMap.js";
import Legend from "./Legend.js";
import Search from "./Search.js";
import UserContext from '../contexts/UserContext';
// TODO: Create a utils file to hold the various axios calls and other helpers?

const Home = () => {
  const {userData, setUserData} = useContext(UserContext);

  useEffect(() => {
    console.log(userData)
    if (userData.city) {
      // This is where we fetch the coordinates from a city name.
      axios
        .get(
          // TODO: Hide access token?
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${userData.city}.json?limit=2&access_token=pk.eyJ1IjoicnN3ODg4IiwiYSI6ImNrYWRhZmZ5NTA1eGcycmxkdTRnNWFhbHgifQ.svdNU6YRgTECe5sPaLxeMg`
        )
        .then(res => {
          console.log("RES", res)
          setUserData({
            ...userData,
            coords: res.data.features[0].center,
            zoom: 10
          });
        });
    }
  }, [userData.city]);

  return (
    <>
      <Header />
      {userData.email ? (
        <p>
          Welcome {userData.email} from {userData.city}!
        </p>
      ) : null}
      <LeafletMap userData={userData} />
      <Search userData={userData} setUserData={setUserData} />
      <Legend />
      <section className="description">
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
