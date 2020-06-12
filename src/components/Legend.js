import React from "react";
import "./Legend.css";

const Legend = () => {
  return (
    <div className="legend">
      <h2>Legend</h2>
      <div style={{display: "flex", justifyContent: 'center', flexDirection: "column"}}>
        <div style={{display: "flex", justifyContent: 'space-around', flexDirection: "row", alignItems: ""}}>
          <p>Time since quake</p>
          <div>{"<day"} <div className="red"></div></div>
          <div>{"<week"} <div className="orange"></div></div>
          <div>{"<fortnight"} <div className="yellow"></div></div>
          <div>{"<month"} <div className="green"></div></div>
        </div>
        <div style={{display: "flex", justifyContent: 'space-around', flexDirection: "row", alignItems: ""}}>
          <div>Magnitude</div>
          <div>{"<4"} <div className="mag-below-4"></div></div>
          <div>{"<5"} <div className="mag-below-5"></div></div>
          <div>{"<6"} <div className="mag-below-6"></div></div>
          <div>{">6"} <div className="mag-above-6"></div></div>
        </div>
      </div>
    </div>
  )
}

export default Legend;
