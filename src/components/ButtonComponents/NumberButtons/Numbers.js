import React,{useState} from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

import { numbers } from '../../../data';
import NumberButton from "../NumberButtons/NumberButton";

//Import your array data to from the provided data file

const Numbers = ({numFunction}) => {
  // STEP 2 - add the imported data to state
  const [Num,setNum] = useState(numbers);
  return (
    <div className="all-num-btn">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       }

      {Num.map((item,index)=>{
        if(item === "0"){return (<NumberButton key= {index} char={item} style={"num-btn-zero"} numFunction={numFunction}/>)}
        else{return (<NumberButton key= {index} char={item} style={"num-btn"} numFunction={numFunction}/>)}
        
      })}

    </div>
  );
};

export default Numbers;
