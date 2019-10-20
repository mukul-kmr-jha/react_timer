import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import TimeBoard from "./component/TimeBoard";
import Laps from "./component/Laps";
import StartPauseButton from "./component/StartPauseButton";
import LapButton from "./component/LapButton";
import ResetButton from "./component/ResetButton";

function App() {
  return (
    <div className="App">
      <div className="heading--cont">
        <h1 className="timer--heading">REACT TIMER</h1>
      </div>

      <div className="timer">
        <div className="left">
          <TimeBoard />
          <div className="btnCont">
            <StartPauseButton />
            <LapButton />
            <ResetButton />
          </div>
        </div>
        <div className="lap">
          <Laps />
        </div>
      </div>
      <div className="footer--cont">
        <p> Built with React and Redux !</p>
      </div>
    </div>
  );
}

export default App;
