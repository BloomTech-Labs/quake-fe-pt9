import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [place, setPlace] = useState({ city: "" });


  const doSearch = (city) => {
    axios
      .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?limit=2&access_token=pk.eyJ1IjoicnN3ODg4IiwiYSI6ImNrYWRhZmZ5NTA1eGcycmxkdTRnNWFhbHgifQ.svdNU6YRgTECe5sPaLxeMg`)
      .then((res) => {
         props.setUserCoords(res.data.features[0].center);
      });
  };

  const handleInput = (e) => {
    setPlace({
      ...place,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    doSearch(place.city);
  };
  
  return (
    <>
      <form type="submit" onSubmit={onSubmit}>
        <input
          type="text"
          onChange={handleInput}
          name="city"
          value={place.city}
          placeholder="Search by City"
        />

        <button type="submit">Enter</button>
      </form>


    </>
  );
};

export default Search;
