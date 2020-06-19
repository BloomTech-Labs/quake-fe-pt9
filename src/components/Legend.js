import React from "react";
import "./Legend.css";

const Legend = () => {
  return (
    <section className="legend">
      <h2>Legend</h2>
      <div className="date">
        <div>Day: <div className="day"></div></div>
        <div>Week: <div className="week"></div></div>
        <div>Fortnight: <div className="fortnight"></div></div>
        <div>Month: <div className="month"></div></div>
      </div>
      <div className="mag">
        <div><span>{"mag<4"} </span><div className="below-4"></div></div>
        <div><span>{"mag<5"} </span><div className="below-5"></div></div>
        <div><span>{"mag<6"} </span><div className="below-6"></div></div>
        <div><span>{"mag>6"} </span><div className="above-6"></div></div>
      </div>
    </section>
  )
}

export default Legend;
