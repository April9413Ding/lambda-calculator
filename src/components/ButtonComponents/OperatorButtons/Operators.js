import React, {useState} from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = ({numFunction}) => {
  // STEP 2 - add the imported data to state
  const [Operat, setOperat] = useState(operators)
  return (
    <div className="all-operat-btn">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       Operat.map((item,index)=>(
         <OperatorButton key = {index} char = {item.char} value={item.value} numFunction={numFunction}/>
       ))
       
       }
    </div>
  );
};

export default Operators;
