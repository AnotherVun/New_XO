import { useState } from "react";
import { Board } from "./Board";
import './TicTacToe.scss'

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [altboard, setAltboard] = useState(Array(9).fill('77'))


  const handleClick = (index) => {
    setBoard(prevBoard => {

      const newBoard = [...prevBoard]
      if (newBoard[index] || calculateWinner(newBoard)) return prevBoard
      newBoard[index] = isXNext ? 'X' : 'O'

      return newBoard
    })

    setIsXNext(prevIsXNext => !prevIsXNext)

  }
  const calculateWinner = (squares) => {
    const lines = [ // Возможные выигрышные комбинации
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
    }

    return null
  }

  const handleRestart = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
  }
  return (
    <div className="game-container">
      <h1 className="game-title">The Gamesas</h1>
      <Board myArray={board} myClick={handleClick} />
      <div className="status">
        {calculateWinner(board) ? `П0бедитель : ${calculateWinner(board)}` : `Следующий х0д : ${isXNext ? 'X' : 'O'}`}
      </div>
      <button onClick={handleRestart} className="restart-button">AGAIN</button>
    </div>
  );
}

export default TicTacToe;