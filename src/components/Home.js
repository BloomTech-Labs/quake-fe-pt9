import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import WorldMap from "./WorldMap";
import WhatToDo from './WhatToDo';
import Dropdown from './Dropdown'
import Dropdown2 from './Dropdown2'

const Home = (props) => {

   useEffect(()=> {
     axios.get(  `https://www.fema.gov/api/open/v1/FemaRegions 
    
     `)
     .then(res=> {console.log("RES",res.data)})
   })
  
  
   
  return (
    <div className="home">
      <Header />
      

      <div id="banner">
        <div class="img-border"><div className="map">
        <WorldMap />
        {/* <Login /> */}
      </div></div>
      </div>

      <div id="wrapper">
        <div id="page-wrapper">
          <div id="page">
            <div id="wide-content">
              <div>
                <h2>About Epicentral</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  nec ullamcorper diam. Praesent ullamcorper neque sit amet
                  cursus consectetur. Curabitur consequat nec lorem sed
                  pharetra. Quisque pretium urna at pulvinar feugiat. Maecenas
                  nec augue a tellus placerat sollicitudin. Curabitur eu lacus
                  eget magna consequat cursus et vel nulla. Vestibulum vel enim
                  mauris. Maecenas ex arcu, rhoncus at nibh sed, laoreet congue
                  nulla. Ut sit amet lacus nec ex malesuada sollicitudin. Fusce
                  eu maximus erat, ac elementum ligula. Pellentesque in
                  vulputate est. Aliquam vel nunc tempor, convallis quam
                  lobortis, dignissim orci. Nam gravida nisi id felis
                  sollicitudin fringilla. Nunc libero sem, auctor vitae lectus
                  tincidunt, malesuada lobortis erat. Fusce lorem sem, aliquet
                  eget iaculis eget, scelerisque eget diam. Quisque tincidunt
                  aliquet ultrices.
                </p>
                <p class="button-style">
                  <a href="#">Login for More Details</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
