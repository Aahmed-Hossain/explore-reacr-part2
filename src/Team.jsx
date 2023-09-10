import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        const teamNew = team + 1;
        setTeam(teamNew)
    }
    const handleRemove = () => {
        const TeamRemove = team - 1;
        setTeam(TeamRemove)
    }
    const teamStyle ={
        border: '2px solid green',
        margin: '15px',
        padding: '10px',
        borderRadius: '15px'
    }

    return(
        <div style={teamStyle}>
            <h1>Players: {team}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}