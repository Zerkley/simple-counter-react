import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";
import Clock from "./clock.jsx";
//include images into your bundle


//create your first component
function Home(props) {
	return (
	  <div className="d-flex justify-content-center bg-black">
		<Clock />
		<SecondsCounter counterDelSecondsCounter={props.counterDelHome[5]} />
		<SecondsCounter counterDelSecondsCounter={props.counterDelHome[4]} />
		<SecondsCounter counterDelSecondsCounter={props.counterDelHome[3]} />
		<SecondsCounter counterDelSecondsCounter={props.counterDelHome[2]} />
		<SecondsCounter counterDelSecondsCounter={props.counterDelHome[1]} />
		<SecondsCounter counterDelSecondsCounter={props.counterDelHome[0]} />

	  </div>
	);
  }
  
  export default Home;
  
