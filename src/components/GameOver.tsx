import React, { FC, useEffect, useState } from 'react';
import { Figure, FigureNames } from '../modules/figures/Figure';
import Timer from './Timer'
import '../App.css';
import { Player } from "../modules/Player";
import { Colors } from '../modules/Colors';

interface GameOverProps {
    currentPlayer:Player | null
    restart: () => void
    setBlackTime: React.Dispatch<React.SetStateAction<number>>
    setWhiteTime: React.Dispatch<React.SetStateAction<number>>
}




    const GameOver: FC<GameOverProps> = ({currentPlayer, restart, setBlackTime , setWhiteTime}) => {
    const [modal,setModal] = useState(true)

    const handleRestart = () => {
        setWhiteTime(300)
        setBlackTime(300)
        setModal(false)
        restart()
    }

  
    return(
        <div>
            <div className={`modalBackground ${modal ? 'show' : ''}`}>
                <div className="modalActive">
                <button onClick={handleRestart} className='modal restart '>Начать заного</button>
                <div className="modalWindow"> GameOver </div>
                <div className="modalPlayer">Проиграл  <div className='modalPlayerColor'>{currentPlayer?.color}</div></div>
                
                         
            </div>

        </div>

        </div>
    )
}
 

export default GameOver