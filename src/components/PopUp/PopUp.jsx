import React from "react";
import "./PopUp.css";

const PopUp = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="btn close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
  // returns empty string if no trigger is specified
};

export default PopUp;
