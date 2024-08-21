import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Player } from "../modules/Player";
import { Colors } from "../modules/Colors";
import GameOver from "./GameOver";
import '../App.css';



interface TimerProps {
    currentPlayer: Player | null
    restart: () => void
    setBlackTime: React.Dispatch<React.SetStateAction<number>>
    blackTime: number
    setWhiteTime: React.Dispatch<React.SetStateAction<number>>
    whiteTime: number
}

const Timer: FC<TimerProps> = ({currentPlayer, restart, setBlackTime , setWhiteTime, blackTime, whiteTime}) => {

     const handleRestart = () => {
        setWhiteTime(300)
        setBlackTime(300)
        restart()
    }


    return (
        <div className="timer">
            <div>
                <button onClick={handleRestart} className="restart">Restart game</button>
            </div>

            
            {blackTime <= 0 || whiteTime <= 0 ? 
            <GameOver
              currentPlayer={currentPlayer}  
              restart={restart}  
              setBlackTime={setBlackTime}
              setWhiteTime={setWhiteTime}/>
            : '' }

            <h2>Чёрные - {blackTime}</h2>
            <h2>Белые - {whiteTime}</h2>
        </div>
     
    )
}


export default Timer;