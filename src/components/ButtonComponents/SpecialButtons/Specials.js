import React,{useState} from "react";
import SpecialButton from "./SpecialButton";
import {specials} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [Spec,setSpec] = useState(specials);
  return (
    <div className="all-spec-btn">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       Spec.map((item,index)=>(
         <SpecialButton key = {index} char ={item} />
       ))

       }
    </div>
  );
};

export default Specials;
