//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0
setInterval(()=>{
    counter++;
    const numeros = counter.toString().split("").reverse();
    //split
   ReactDOM.render(<Home counterDelHome={numeros} />, document.querySelector("#app")); 
},1000)
