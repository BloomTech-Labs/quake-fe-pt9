import React , { useState , useEffect}from 'react'
import Header from './Header';
import Footer from './Footer';
import WorldMap from './WorldMap';
import axios from 'axios'
import LocalMap from './LocalMap';
import Dropdown from './Dropdown';
import Search from './Search';


const Dashboard = (props) => {
   
     const email = localStorage.getItem('email')
     const city = localStorage.getItem('city')
     const country = localStorage.getItem('country')

     const  [userCoords, setUserCoords] = useState( [0,0])

     useEffect(() => {
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?limit=2&access_token=pk.eyJ1IjoicnN3ODg4IiwiYSI6ImNrYWRhZmZ5NTA1eGcycmxkdTRnNWFhbHgifQ.svdNU6YRgTECe5sPaLxeMg`
        )
        .then((res) => {
           setUserCoords(res.data.features[0].center)
        });
    }, [city]);
     
   
  
   return (


    <div className = 'home'>
        <Header/>
      <h1>Dashboard</h1>
     <h2>Welcome {email}!</h2>
     <h3>Location:  {city} ,{country}</h3>
     <Search setUserCoords = {setUserCoords}/>
     {/* <Dropdown setUserCoords= {setUserCoords}/> */}

    <LocalMap userCoords = {userCoords}/>
         <Footer/>
    </div>
   )

  


}

export default Dashboard