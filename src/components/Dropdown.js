import React, { useState, useEffect } from "react";

const Dropdown = (props) => {
  const [place, setPlace] = useState([]);

  const [shelter, setShelter] = useState({});

  const submitPlace = (e) => {
    e.preventDefault();
    const filtered = props.fema.filter((e) => {
      if (place === e.city) {
        return e;
      }
    });

    setShelter(filtered[0]);

    console.log("SHELTER", shelter);
    console.log("GEO", shelter.geometry);
    console.log("LOC", shelter.loc);
  };

  return (
    <div className="dropdown">
      <form type="submit" onSubmit={submitPlace}>
        <label htmlFor="Fema camps">
          Fema camps
          <select
            id="place"
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
    { shelter.loc ? (
      <div className="fema-info">
        <h3>{shelter.name}</h3>
        <h3>{shelter.address} </h3>
        <h3>{shelter.city}</h3>
        <h3>{shelter.state}</h3>
        <h3>{shelter.states}</h3>
        <p>{shelter.loc.coordinates}</p>
      </div>
    ) : null}
    </div>
  );
};

export default Dropdown;
