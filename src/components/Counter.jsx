import {useState} from "react";

export const Counter=()=>{
    const [value,setValue]=useState(0);
    const handleIncreaseValue=()=>{
        setValue(value+1);
    }
    const handleDecreaseValue=()=>{
        setValue(value-1);
    }
    return(
        <div className={"counter"}>
            <button onClick={handleIncreaseValue}>+</button>
            <h2>{value}</h2>
            <button onClick={handleDecreaseValue}>-</button>
        </div>

    )
}