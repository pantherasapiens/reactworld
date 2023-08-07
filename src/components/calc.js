import React, { useState, useRef } from "react"; 
import "./calc.css"; 
 
function CALC() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    const inputVal = inputRef.current.value; 
    const newResult = result + Number(inputVal); 
    setResult(newResult);  
  } 
 
  function minus(e) { 
    e.preventDefault(); 
    const inputVal = inputRef.current.value; 
    const newResult = result - Number(inputVal); 
    setResult(newResult); 
  } 
 
  function times(e) { 
    e.preventDefault(); 
    const inputVal = inputRef.current.value; 
    const newResult = result * Number(inputVal); 
    setResult(newResult); 
  } 
 
  function divide(e) { 
    e.preventDefault(); 
    const inputVal = inputRef.current.value; 
    const newResult = result / Number(inputVal); 
    setResult(newResult); 
  } 
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0; 
  } 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0); 
  } 
 
  return ( 
    <div className="calc"> 
      <div> 
        <h1>Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>{result}</p> 
        <input 
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number"
          className="i"
        />
        <div> 
        <button onClick={plus} className="b">add</button> 
        <button onClick={minus} className="b">subtract</button> 
        <button onClick={times} className="b">multiply</button> 
        <button onClick={divide} className="b">divide</button>
        <button onClick={resetResult} className="b1">reset result</button> 
        <button onClick={resetInput} className="b1">reset input</button> 
        </div> 
      </form> 
    </div> 
  ); 
} 
 
export default CALC;