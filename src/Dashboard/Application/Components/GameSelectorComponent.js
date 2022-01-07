import React, {useState, useEffect} from 'react'

export default function GameSelectorComponent({onRemove, onUpdate}) {

    const [gameValue, setGameValue] = useState("valorant");
    const [gamePercentage, setGamePercentage] = useState(null);

    useEffect(() => {
        onUpdate(gameValue, gamePercentage)
    }
    , [gameValue, gamePercentage])

    const options = [
        { value: "Valorant", label: "Valorant"},
        { value: "LoL", label: "LoL" },
        { value: "RiskOfRain2", label: "Risk of Rain 2" },
        { value: "SuperPeople", label: "Super people" },
        { value: "GuildWars2", label: "Guild wars 2" },
        { value: "DeadByDaylight", label: "Dead by daylight" },
        { value: "FallGuys", label: "Fall guys" },
    ]

    return (
        <div className='game-selector-holder'>
            <select className='game-picker' onChange={(e) => setGameValue(e.target.value)}>
                {options.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
            <div className='input-holder'><input id="quantity" name="quantity" min="1" max="99" onChange={(e) => setGamePercentage(e.target.value)}></input><p className='percentage'>%</p></div>
            <button className="remove-game-button" onClick={onRemove}>x</button>
        </div>
    )
}
