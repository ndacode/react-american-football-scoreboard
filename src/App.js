//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./App.css";
import fed from "./Assets/fed.jpg";
import rafa3 from "./Assets/rafa3.jpg";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [homeGameScore, setHomeGameScore] = useState(0);
  const [homeSetScore, setHomeSetScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [awayGameScore, setAwayGameScore] = useState(0);
  const [awaySetScore, setAwaySetScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <img src = {fed} alt ="Roger Federer"></img>
            <h2 className="home__name">Roger Federer</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
            <div className="home__score">{homeGameScore}</div>
            <div className="home__score">{homeSetScore}</div>
          </div>


          <div className="timer">00:03</div>
          <div className="away">
            <img src = {rafa3} alt ="Rafael Nadal"></img>
            <h2 className="away__name">Rafael Nadal</h2>
            <div className="away__score">{awayScore}</div>
            <div className="away__score">{awayGameScore}</div>
            <div className="away__score">{awaySetScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {()=> setHomeScore(homeScore + 15)}>Federer Point</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setHomeGameScore(homeGameScore + 1)}>Federer Game</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setHomeSetScore(homeSetScore + 1)}>Federer Set</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {()=> setAwayScore(awayScore + 15)}>Rafa Point</button>
          <button className="awayButtons__fieldGoal" onClick = {()=> setAwayGameScore(awayGameScore + 1)}>Rafa Game</button>
          <button className="awayButtons__fieldGoal" onClick = {() => setAwaySetScore(awaySetScore + 1)}>Rafa Set</button>
        </div>
      </section>
    </div>
  );
}

const rootElement = document.getElementById ("root");
ReactDOM.render(<App />, rootElement)
export default App;

