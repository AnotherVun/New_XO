import { useState } from "react";
import { Board } from "./Board";
import './TicTacToe.scss'

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill('69'))
  const [altboard, setAltboard] = useState(Array(9).fill('77'))

  return (
    <div className="game-container">
      <h1 className="game-title">The Gamesas</h1>
      <Board myArray = {board} altArray = {altboard}/>
    </div>
   );
}

export default TicTacToe;