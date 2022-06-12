import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";

function App() {
  return (
    <div className="flex justify-center items-center flex-col mt-24">
      <div className="">
        <h1 className="font-medium text-gray-500 text-3xl text-center">
          Welcome to the TIC TAC TOE game!
        </h1>
      </div>
      <div className="mt-12">
        <Game />
      </div>
    </div>
  );
}

export default App;
