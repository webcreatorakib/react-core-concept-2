import { useState } from "react"

export default function Counter(){
    const [count, setState] = useState(0);

    const handleCount = () =>{
        const newCount = count + 1;
        setState(newCount);
    }

    const handleMinus = () =>{
        const newMinus = count - 1;
        setState(newMinus)
    }
    return(
        <div style={{border: "2px solid tomato", padding:'20px',margin: "20px"}}>
            <h3>Counter : {count}</h3>
            <button onClick={handleCount}>Add</button>
            <button onClick={handleMinus}>Minus</button>
        </div>
    )
}