import React, {useState, useEffect} from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';

const Eroute = ()=> {

     const [city, setCity]= useState({city:''});
     const [info, setInfo]=useState('')


    const getInfo = (e)=> {
        e.preventDefault()
        axios.get(`https://labspt9-quake-be.herokuapp.com/emergency/${city.city}`)
            .then(res => {
                console.log("RES", res);
              setInfo(res.data);
            })
        // console.log("INFO", info)
        // console.log("CITY", city)
    }

    const handleInput = (e) => {
        setCity({
          ...city,
          [e.target.name]: e.target.value,
        });
      };


    return (

        <>
        <h1>Emergency</h1>
        <div className = 'emergency'>
          <h1>{city.city}</h1>
          {renderHTML(info)}
        </div>

        <form type = 'submit ' onSubmit={getInfo}>
            <input
              type = 'text'
              name= 'city'
              value ={city.city}
              onChange={handleInput}
              placeholder ='enter city'
              />
              <button type = 'submit'>Enter</button>
        </form>

        </>
    )
}

export default Eroute
