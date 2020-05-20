import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (

    <div id="header-wrapper">
	<div id="header">
		<div id="logo">
			<h1><a href="#">Epicentral</a></h1>
			<p>Up to Date Earthquake Information </p>
		</div>
		<div id="menu">
			<Nav />
		</div>
	</div>
</div>
 
 
 
  );


};

export default Header;
