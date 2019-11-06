import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button className="btn spec-btn" onClick={()=>props.numFunction(props.char)}>{props.char}</button>

    </>
  );
};

export default SpecialButton;
