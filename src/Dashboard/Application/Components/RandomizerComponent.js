import React, {useState} from 'react'
import GameSelectorComponent from './GameSelectorComponent';
import { Spin } from 'antd';
import Spinner from '../../../Common/Components/Spinner';

const RandomizerComponent = () => {

    const [gamesToRandomize, setGamesToRandomize] = useState([]);
    const [percentageLeft, setPercengateLeft] = useState(100);
    const [gameWePlaying, setGameWePlaying] = useState("");
    const [loding, setLoading] = useState(false);

    const onAddNewGame = () => {
        const oldState = gamesToRandomize;

        const indexOfLastGame = oldState.indexOf(oldState.at(-1))


        const idOfNewGame = indexOfLastGame === -1 ? 0 : gamesToRandomize[indexOfLastGame].id + 1;

        const newGame = { id: idOfNewGame, value: "", percentage: 0 }

        setGamesToRandomize([...oldState, newGame])

    }

    const onRemoveGame = (id) => {
        const filteredGames = gamesToRandomize.filter(game => game.id !== id)

        setGamesToRandomize(filteredGames);
        setPercengateLeft(calculatePercentageLeft(filteredGames))

    }

    const calculatePercentageLeft = (array) => {
  
        let finalNumber = 0;
        for (const element of array) {

            finalNumber = finalNumber + Number(element.percentage);
          }

          return 100 - finalNumber;
    }

    const onGameUpdate = (id, game, value) => {
        const foundGame = gamesToRandomize.filter(item => item.id === id)


        const restOfGames = gamesToRandomize.filter(item => item.id !== id) 
 

        foundGame[0].value = game;
        foundGame[0].percentage = value;

        let joinedArray = [];
        if(restOfGames.length === 0){
            joinedArray = [foundGame[0]]
        }else{
            joinedArray = [...restOfGames, foundGame[0]];
        }

        joinedArray.sort((a,b) => a.id - b.id);


        setPercengateLeft(calculatePercentageLeft(joinedArray))
        setGamesToRandomize(joinedArray);

    }

    const startSpining = () => {
        setLoading(true);

        setTimeout(() => {setLoading(false)}, 3000);
    }


    const onCalculate = () => {
        startSpining();
        let arrayForCalculation = [];

        for(const element of gamesToRandomize){
            arrayForCalculation.push({name: element.value, percentage: element.percentage !== null ? Number(element.percentage) : 0}) 
        }

       

        const elemntsWithoutPercentage = arrayForCalculation.filter(item => item.percentage === 0)


        for(const element of arrayForCalculation){
            if(!element.percentage){
                element.percentage = percentageLeft/elemntsWithoutPercentage.length;
            }
        }


        let incrementor = 0;
        for(const element of arrayForCalculation){
            element.starting = incrementor; 
            element.ending = incrementor + element.percentage; 
            incrementor = incrementor + element.percentage; 
        }

        const roundedRandomNumber = Math.round(Math.random() * 100);

    
        setGameWePlaying(arrayForCalculation.find(item => item.starting < roundedRandomNumber && item.ending >  roundedRandomNumber).name)

    }


    return (
        <div className='randomizer-holder'>
            <h2 className='main-heading'>GAME RANDOMIZER</h2>
            <button className='add-game-button' onClick={onAddNewGame}>+ Add game</button>
            {
                gamesToRandomize.map(item => 
                       <GameSelectorComponent key={item.id} onRemove={() => onRemoveGame(item.id)} onUpdate={(game, value) => onGameUpdate(item.id, game, value)} />
                    )
            }
           <div className='percentage-left-wrapper'> <p className='percentage-left-holder'>PERCENTAGE LEFT:</p> &nbsp; <p className='percentage-left'>{percentageLeft}</p></div>
            <button className='calculate-game-button' onClick={onCalculate}>{loding ? <Spinner/> : "CALCULATE"}</button>
            { loding ? null :
            gameWePlaying !== "" ? <div className='winner-holder'><p className='winner-text'>WINNER IS: &nbsp;</p><p className='winner'>{gameWePlaying}</p></div> : null
            }
        </div>
    )
}

export default RandomizerComponent;