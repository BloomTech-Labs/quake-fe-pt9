import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [place, setPlace] = useState({ city: "" });

  const [region, setRegion] = useState( {state: ''});

  const doSearch = (city) => {
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?limit=2&access_token=pk.eyJ1IjoicnN3ODg4IiwiYSI6ImNrYWRhZmZ5NTA1eGcycmxkdTRnNWFhbHgifQ.svdNU6YRgTECe5sPaLxeMg`
      )
      .then((res) => {
         props.setUserCoords(res.data.features[0].center);
      });
  };

  const SearchState = (region) => {
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${region}.json?limit=2&access_token=pk.eyJ1IjoicnN3ODg4IiwiYSI6ImNrYWRhZmZ5NTA1eGcycmxkdTRnNWFhbHgifQ.svdNU6YRgTECe5sPaLxeMg`
      )
      .then((res) => {
        console.log("REZ- STATE", res.data );
        // props.setUserCoords(res.data[0] );
      });
  };

  const handleInput = (e) => {
    setPlace({
      ...place,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegion = (e) => {
    setRegion({
      [e.target.name]: e.target.value,
    });
  };

  const submitState = (e) => {
    e.preventDefault();
    SearchState(region);
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

      <form type="submit" onSubmit={submitState}>
        <input
          type="text"
          onChange={handleRegion}
          name="region"
          value={region.state}
          placeholder="Search by State/Province"
        />
        <button>Enter State</button>
      </form>
    </>
  );
};

export default Search;
