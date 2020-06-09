import React, { useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [place, setPlace] = useState("");

  const doSearch = (place) => {
    axios
      .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=2&access_token=pk.eyJ1IjoicnN3ODg4IiwiYSI6ImNrYWRhZmZ5NTA1eGcycmxkdTRnNWFhbHgifQ.svdNU6YRgTECe5sPaLxeMg`)
      .then((res) => {
        console.log(res);
        const features = res.data.features;
        if (features.length) {
          props.setUserData({
            ...props.userData,
            coords: res.data.features[0].center,
            zoom: zoom(features[0].place_type[0])
          });
        } else {
          alert("Enter a valid place name or postal code.")
        }
      });
  };

  const zoom = (placeType) => {
    if (placeType === "place") {
      return 10;
    } else if (placeType === "region") {
      return 6;
    } else if (placeType === "country") {
      return 6;
    } else {
      return 1;
    }
  }

  const handleInput = (e) => {
    setPlace(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    doSearch(place);
  };

  return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={handleInput}
          name="place"
          value={place}
          placeholder="City/Zip"
        />
        <button type="submit">Enter</button>
      </form>
  );
};

export default Search;
