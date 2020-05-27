import React, {useState, useEffect} from 'react';
import FemaMap from './FemaMap';
import Dropdown from './Dropdown';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer'
 
const Fema = (props)=> {


    const [fema, setFema] = useState([]);
    

    //2 different ways to fetch the data

    async function getStuff(){
     
      const response = await   axios
      .get(
        `https://www.fema.gov/api/open/v1/FemaRegions 
    
        `
         
      )
      .then(res=> {
        setFema(res.data.FemaRegions)
      })
      return response
      
    }




    useEffect(()=> {
      getStuff()
      console.log('NEW STUFF', fema)
    },[])


    // useEffect(()=> {
    //     axios
    //   .get(
    //     `https://www.fema.gov/api/open/v1/FemaRegions 
    
    //     `
         
    //   )
    //   .then((res) => {
    //     setFema(res.data.FemaRegions)
    //       setFema(res.data.FemaRegions)
    //      console.log("STUFF",fema)
    //   });
    //   },[])
      


    return (
        <div className = 'fema'>
    <h1>FEMA</h1>
    <Header/>
        <Dropdown fema = {fema}/>
        <Footer/>
         </div>
    )
}

export default Fema;