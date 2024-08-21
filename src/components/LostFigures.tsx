import React, { FC } from "react";
import { Figure, FigureNames } from "../modules/figures/Figure";
import GameOver from "./GameOver";
import { Player } from "../modules/Player";
import { King } from "../modules/figures/King";


interface LostFiguresProps {
    title: string
    figures: Figure[]
    currentPlayer: Player | null
    restart: () => void
    setBlackTime: React.Dispatch<React.SetStateAction<number>>
    setWhiteTime: React.Dispatch<React.SetStateAction<number>>
}




const LostFigures: FC<LostFiguresProps>  = ({title, figures, currentPlayer, restart, setBlackTime , setWhiteTime,}) => {

  let firureKing =  figures.find(item => item.name === "Король")

    return (
        <div className="lost">
        <h3>{title}</h3>
        {figures.map(figure =>
          <div key={figure.id}>
            {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo}/>}
          
          </div>
        )}
        {firureKing ?   <GameOver
              currentPlayer={currentPlayer}  
              restart={restart}  
              setBlackTime={setBlackTime}
              setWhiteTime={setWhiteTime}/>  : ''}
      </div>
    )
}

export default LostFigures;