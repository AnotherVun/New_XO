import React from "react"
import './Board.scss'

interface BoardProps {
  myArray: string[],
  myClick: (index: number) => void
}

export const Board: React.FC<BoardProps> = ({ myArray, myClick }) => {
  return (
    <div className="board">
      {myArray.map((element, index) =>
        <button className="Six" key={index} onClick={() => myClick(index)}>
          {element}
        </button>)}
    </div>

  )
}
