import { useState } from "react"

export default function Player(){
    const [team, setTeam] = useState(12);
    const handleAdd = () =>{
        const newPlayer  = team + 1;
        setTeam(newPlayer);
    }
    const handleRemove = () =>{
        const newPlayer  = team -1;
        setTeam(newPlayer);
    }
    return(
        <div style={{border: "2px solid black",padding:"20px", margin:'20px'}}>
            <h3>Player Quantity : {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}