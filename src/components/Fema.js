import React, {useState, useEffect} from 'react';
import Dropdown from './Dropdown';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import LeafletMap from './LeafletMap';

const Fema = (props)=> {

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
      <Header/>
      <Dropdown setUserCoords={props.setUserCoords} fema={fema}/>
      <LeafletMap userCoords={props.userCoords} />
      <Footer/>
    </div>
  )
}

export default Fema;
