import React from "react";
import "./App.css";

const BottomRow = () => {
  return (
    <>
    <div className="bottomRowHome">
      <div>FEDERER</div>
      <div className="down">
        <h3 className="down__title">MPH</h3>
        <div className="down__value">93</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">WINNERS</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">ERRORS</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">ACES</h3>
        <div className="quarter__value">4</div>
      </div> 
    </div>
    
  <div className="bottomRowAway">
    <div>NADAL</div>
    <div className="down">
      <h3 className="down__title">MPH</h3>
      <div className="down__value">93</div>
    </div>
    <div className="toGo">
      <h3 className="toGo__title">WINNERS</h3>
      <div className="toGo__value">7</div>
    </div>
    <div className="ballOn">
      <h3 className="ballOn__title">ERRORS</h3>
      <div className="ballOn__value">21</div>
    </div>
    <div className="quarter">
      <h3 className="quarter__title">ACES</h3>
      <div className="quarter__value">4</div>
    </div> 
    </div>
 </>

  );
};

export default BottomRow;
