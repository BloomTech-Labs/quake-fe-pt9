import React, { useState, useEffect } from "react";
 import LocalMap from './LocalMap';

const Dropdown = (props) => {
  const [place, setPlace] = useState([]);

  const [userCoords, setUserCoords] = useState([0,0]);

 
  const [shelter, setShelter] = useState({});

  const submitPlace = (e) => {
    e.preventDefault();

    if (shelter.loc) {
      setUserCoords(shelter.loc.coordinates);
      console.log('LOC',shelter.loc.coordinates[0])
     } else {
      setUserCoords( [0,0]);
    }

    const filtered = props.fema.filter((e) => {
       if (place === e.city) {
        return e;
      }
    });

    

    setShelter(filtered[0]);
  
     console.log("SHELTER", shelter);
    console.log("COORDS", userCoords);
    
    
  };

  return (
    <div className="dropdown">
      <form type="submit" onSubmit={submitPlace}>
        <label htmlFor="Fema camps">
          Fema camps
          <select
            id="place"
            key ={place}
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            onBlur={(e) => console.log("EHONDA", e.target.value)}
          >
            <option>SELECT</option>
            {props.fema.map((f) => (
              <option key={f}>{f.city}</option>
            ))}
          </select>
        </label>
        <button className="fema-button" type="submit">
          enter
        </button>
      </form>
      {shelter.loc ? (
        <div className="fema-info">
          <h3>{shelter.name}</h3>
          <h3>{shelter.address} </h3>
          <h3>{shelter.city}</h3>
          <h3>{shelter.state}</h3>
          <h3>{shelter.states}</h3>
         </div>
      ) : null}

      <LocalMap userCoords = {userCoords} />
    </div>
  );
};

export default Dropdown;
