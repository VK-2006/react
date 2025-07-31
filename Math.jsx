import { useState } from "react";

export function Math(){
    let [plus,setplus] = useState(0);
    function increment(){
      plus = plus + 1;
      console.log(plus)
      setplus(plus);
    }
  return(
    <>
      <div className="hdiv">
        <h1 className="hai">{plus}</h1>
      </div>
      <br />
      <br />
      <button className="adder" onClick={increment}><p>Add</p></button>
    </>
  );
}