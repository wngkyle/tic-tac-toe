import Square from "./Square"
import { useState } from "react"

function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i]
        if (squares[a] && squares === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
}


// export keyword makes this function accessible outside of this file
// default keyword tells other files using your code that it's main function in your file
export default function Board() { 
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    function onSquareClick(i) {
        if (squares[i]) {
            return
        }
        const nextSquares = squares.slice()
        if (xIsNext) {
            nextSquares[i] = "X"
        } else {
            nextSquares[i] = "O"
        }
        setSquares(nextSquares)
        setXIsNext(!xIsNext)

    }

    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} onClick={() => onSquareClick(0)} />
                <Square value={squares[1]} onClick={() => onSquareClick(1)} />
                <Square value={squares[2]} onClick={() => onSquareClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={() => onSquareClick(3)} />
                <Square value={squares[4]} onClick={() => onSquareClick(4)} />
                <Square value={squares[5]} onClick={() => onSquareClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={() => onSquareClick(6)} />
                <Square value={squares[7]} onClick={() => onSquareClick(7)} />
                <Square value={squares[8]} onClick={() => onSquareClick(8)} />
            </div>
        </>
    )
}

// className='square' is a button property or prop that tells CSS how to style the button 
