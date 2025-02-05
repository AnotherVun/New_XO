import React from "react"
import './Board.scss'

interface BoardType {
  myArray: string[],
  altArray: string[]
}

export const Board: React.FC<BoardType> = ({ myArray, altArray }) => {
  return (
  <div className="board">
    {myArray.map((element, index) => <button className="Six" key={index}>{element}</button>)}
    {altArray.map((element, index) => <button key={index}>{element}</button>)}
  </div>

  )
}
