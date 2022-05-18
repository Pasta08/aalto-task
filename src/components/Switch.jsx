import React from "react";
import "../Styles/Switch.css"

const Switch = ({isCompleted, handleCheck}) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isCompleted} onChange={handleCheck}/>
      <span className="slider"/>
    </label>
  );
};

export default Switch;
