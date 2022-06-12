import React, { useState } from "react";

const Game = () => {
    const [turn, setTurn] = useState("X")
    const [cells, setCells]= useState(Array(9). fill(''))
    const [winner, setWinner] = useState()

    const checkForWinner = (squares) => {
        let combos = {
            across : [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagnoal: [
                [0,4,8],
                [2,4,6]
            ]
        }
        for(let combo in combos){
            combos[combo].forEach((pattern) => {
                if(squares[pattern[0]] === '' ||
                   squares[pattern[1]] === '' ||
                   squares[pattern[2]] === ''
                   ){}
                   else if(squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]){
                        setWinner(squares[pattern[0]])
                    }
            })
        }
    }

  const clickHandler = (num) => {
      if(cells[num] !== ""){
          return;
      }
    let squares = [...cells]
    if(turn === 'X'){
        squares[num] ="X"
        setTurn("O")
    }else{
        squares[num] = "O"
        setTurn("X")
    }

    checkForWinner(squares)
    setCells(squares)
    
  };

  const restartGame = () => {
      setWinner(null)
      setCells(Array(9).fill(''))
  }

  const Cell = ({num}) => {
    return (
      <td
        className="border-solid border-2 border-red-400 w-24 h-24 bg-red-100
         hover:bg-red-200 cursor-pointer font-medium text-gray-500 text-2xl text-center"
        onClick={() => clickHandler(num)}
      >
        {" "}
        {cells[num]}
      </td>
    );
  };
  return (
    <div>
        <div>
        <h3 className="font-medium text-gray-500 text-2xl mb-2">The next player is:  {turn}</h3>
        </div>
      <table>
         
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>

      </table>

      {winner && <p className="font-medium text-gray-500 text-2xl">
          The winner is:  {winner}</p>}
          <button onClick={() => restartGame()} className="border-solid border-2 border-red-400 p-1 
          rounded-xl bg-red-100 text-gray-500 text-base hover:bg-red-200 mt-2">Restart game!</button>
    </div>

    
  );
};

export default Game;
