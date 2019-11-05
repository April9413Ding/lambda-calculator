import React from "react";

const NumberButton = (props) => {
  
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      
      <button className={`btn ${props.style}`} onClick={()=>props.fun}>{props.char}</button>
      
      }

    </>
  );
};

export default NumberButton;
