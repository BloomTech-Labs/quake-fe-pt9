import React , {useEffect}from 'react'
import Header from './Header';
import Footer from './Footer';
import WorldMap from './WorldMap';
import axios from 'axios'


const Dashboard = (props) => {
   
     const email = localStorage.getItem('email')
     const city = localStorage.getItem('city')
     const country = localStorage.getItem('country')
     
     
   return (


    <div className = 'home'>
        <Header/>
     <h1>Dashboard</h1>
     <h2>Welcome {email}!</h2>
     <h3>Location:  {city} ,{country}</h3>
     <WorldMap/>
         <Footer/>
    </div>
   )




}

export default Dashboard