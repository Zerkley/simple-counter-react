import propTypes from "prop-types";
import React from "react";


function SecondsCounter(props) {
    
    return (
        <div className="card mx-2 my-2" style={{width: "3rem"}}>
  <div className="card-body">
  {props.counterDelSecondsCounter}
  </div>
</div>
    
     )
}

export default SecondsCounter;
