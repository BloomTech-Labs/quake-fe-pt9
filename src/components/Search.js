import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [place, setPlace] = useState({ city: "" });

  const [zip, setZip] = useState({postcode:  ""});

  const [zipMessage, setZipMessage] = useState({message: ''})


  useEffect(()=> {
    axios
    .get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/81503.json?limit=2&access_token=pk.eyJ1IjoicnN3ODg4IiwiYSI6ImNrYWRhZmZ5NTA1eGcycmxkdTRnNWFhbHgifQ.svdNU6YRgTECe5sPaLxeMg`
    )
    .then(res=> console.log("NEWREZ", res.data))
  })

 
  const doSearch = (city) => {
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?limit=2&access_token=pk.eyJ1IjoicnN3ODg4IiwiYSI6ImNrYWRhZmZ5NTA1eGcycmxkdTRnNWFhbHgifQ.svdNU6YRgTECe5sPaLxeMg`
      )
      .then((res) => {
        // console.log("THIS ZIPCODE",res.data.features[1].context[0].text)
         props.setUserCoords(res.data.features[0].center);
      });
  };

   

  const handleInput = (e) => {
    setPlace({
      ...place,
      [e.target.name]: e.target.value,
    });
  };

   const handleZipInput = (e)=> {
     setZip({
     ...zip,
     [e.target.name]: e.target.value})


   }
   

  const onSubmit = (e) => {
    e.preventDefault();
    doSearch(place.city);
  };
  const submitZip = e => {
    e.preventDefault();
    setZipMessage({message:''})
    if(zip.postcode.length ==5){
    doSearch(zip.postcode)}
    else{
      console.log( 'Please enter a valid Zipcode.', zip.postcode.length)
      setZipMessage({message: "Please enter a valid Zipcode."})
    }
  }
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

      <form onSubmit ={submitZip}>
      <input
           type = 'text'
          onChange = {handleZipInput}
          name="postcode"
          value={zip.postcode}
          placeholder="Search by Zipcode"
          />
        <button type="submit">Enter</button>
        <h3>{zipMessage.message}</h3>
      </form>

      
    </>
  );
};

export default Search;
