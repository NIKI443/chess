import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './modules/Board';
import { Player } from './modules/Player';
import { Colors } from './modules/Colors';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';






function App() {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)



  const [blackTime, setBlackTime] = useState(300)
  const [whiteTime, setWhiteTime] = useState(300)
  
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  
  useEffect(() => {
      startTimer()
      
  },[currentPlayer, blackTime, whiteTime])
  

  function startTimer() {
      if (timer.current){
         clearInterval(timer.current) 
      }
  
      const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTime : decrementBlackTime

          timer.current = setInterval(callback, 1000) 
          if (blackTime <= 0 || whiteTime <= 0){
              clearInterval(timer.current) 
           }
         

      
  }
  

  function decrementBlackTime() {
      setBlackTime(prev => prev - 1)
  }
  function decrementWhiteTime() {
      setWhiteTime(prev => prev - 1)
      
  }






  useEffect( () => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer(){
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className="app ">
      
      <Timer
      restart={restart}
      currentPlayer={currentPlayer}
      setBlackTime={setBlackTime}
      setWhiteTime={setWhiteTime}
      blackTime={blackTime}
      whiteTime={whiteTime}
      />

     <BoardComponent
     board={board}
     setBoard={setBoard}
     currentPlayer={currentPlayer}
     swapPlayer={swapPlayer}
     />
    
  <div className='lostFigure'>
    <LostFigures 
    title="Чёрные фигуры" 
    figures={board.lostBlackFigures}
    currentPlayer={currentPlayer}
    restart={restart}
    setBlackTime={setBlackTime}
    setWhiteTime={setWhiteTime}/> 
    <LostFigures 
    title="Белые фигуры" 
    figures={board.lostWhiteFigures}
    currentPlayer={currentPlayer}
    restart={restart}
    setBlackTime={setBlackTime}
    setWhiteTime={setWhiteTime}/>
    
  </div>

 
 
      
  
    </div>
  );
}

export default App;
