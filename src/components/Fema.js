import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import LeafletMap from './LeafletMap';

// TODO: Add to upcoming "Options" component, then remove. RC3

const Fema = props => {
  const [fema, setFema] = useState([]);

  useEffect(()=> {
    axios.get(`https://www.fema.gov/api/open/v1/FemaRegions`)
    .then((res) => {
      setFema(res.data.FemaRegions);
    }).catch(err => {
      console.log(err);
    });
  }, [])

  return (
    <div className='fema'>
      <h1>FEMA</h1>
      <Dropdown setUserCoords={props.setUserCoords} fema={fema}/>
      <LeafletMap userCoords={props.userCoords} />
    </div>
  )
}

export default Fema;
