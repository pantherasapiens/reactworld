import {useState} from 'react'
export default function PR(){
    const[state,setState]=useState(0);
    
    let handle=(()=>setState(state+1));
    return(
        <>
        <div>
            This is a practice on hooks
            <div>
                <button onClick={handle}>Click me</button>
                State:{state}
            </div>
        </div>
        <div className="fun">I am the developr aspiring to be a homo sapiens</div>
        </>
    )
}