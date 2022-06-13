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
        className="shadow-lg flex justify-center items-center rounded-lg border-solid border-2 border-red-400 w-24 h-24 bg-red-50
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
        <h3 className="font-medium text-gray-500 text-2xl mb-2 text-centers">The next player is:  {turn}</h3>
        </div>

          <div className="grid grid-cols-3 gap-3">
            <div><Cell num={0} /></div>
            <div><Cell num={1} /></div>
            <div><Cell num={2} /></div>
            <div><Cell num={3} /></div>
            <div><Cell num={4} /></div>
            <div><Cell num={5} /></div>
            <div><Cell num={6} /></div>
            <div><Cell num={7} /></div>
            <div><Cell num={8} /></div>
          </div>


      {winner && <p className="font-medium text-gray-500 text-2xl">
          The winner is:  {winner}</p>}
          <button onClick={() => restartGame()} className="block mx-auto my-7 border-solid border-2 border-red-400 p-3
          rounded-xl bg-red-100 text-gray-500 text-base hover:bg-red-200 mt-2">Restart game!</button>
    </div>

    
  );
};

export default Game;
