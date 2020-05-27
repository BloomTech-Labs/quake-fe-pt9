import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {

// This is a temporary style to see the content, will be removed once we style component correctly
  let contactStyle = {
    background: 'orange',
    color: 'black'
  }


  return (
    <div style={contactStyle}>
      <Header />
      <h2>(512) 555-4578</h2>
      <h2>ShakeN'Quake@gmail.com</h2>

      <Footer />
    </div>
  );
};

export default Contact;
