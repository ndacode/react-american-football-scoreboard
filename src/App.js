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
  

  //  const handlePlayer = player => {setPlayer(player)};

  const players = [
    {FirstName: "Roger", LastName: "Federer", picture: {fed}},
    {FirstName: "Serena", LastName: "Williams", picture: {fed}},
    {FirstName: "Rafael", LastName: "Nadal", picture: {rafa3}},
    {FirstName: "Novak", LastName: "Djokovic", picture: {fed}},
    {FirstName: "Venus", LastName: "Williams", picture: {fed}},
    {FirstName: "Nick", LastName: "Kyrgios", picture: {rafa3}},
    {FirstName: "Naomi", LastName: "Osaka", picture: {fed}},
    {FirstName: "Victoria", LastName: "Azarenka", picture: {rafa3}},
    {FirstName: "Simona", LastName: "Halep", picture: {fed}}
  ]
   const [player, setPlayer] = useState(players[0]);

  return (
    <div className="container">
      <div className="game">
      <section className="buttons">
      <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => (homeScore < 45 ? setHomeScore(homeScore + 15) : (setHomeScore(0), setHomeGameScore( homeGameScore + 1)))}> Point</button>

          <button className="homeButtons__fieldGoal" onClick = {() => homeGameScore < 6 ? setHomeGameScore(homeGameScore + 1) : (setHomeGameScore(0), setHomeSetScore( homeSetScore + 1))}> Game</button>
          <button className="homeButtons__fieldGoal" onClick = {() => homeSetScore < 6 ? setHomeSetScore(homeSetScore + 1) : setHomeSetScore(0)}> Set</button>
        </div>
      </section>
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <img src = {fed} alt = "Roger Federer"></img>
            <h2 className="home__name">Roger Federer</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
            <div className="home__score">{homeGameScore}</div>
            <div className="home__score">{homeSetScore}</div>
          </div>

          <div className="new-game">
          <div className="timer">00:00</div>
          <button className="new-game" onClick = {() => setPlayer(Math.floor((Math.random() * players.length)) + 1)}>New Players</button>
          </div>

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
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => awayScore < 45 ? setAwayScore(awayScore + 15) : (setAwayScore(0), setAwayGameScore( awayGameScore + 1))}> Point</button>
          <button className="awayButtons__fieldGoal" onClick = {()=> awayGameScore < 6 ? setAwayGameScore(awayGameScore + 1): (setAwayGameScore(0), setAwaySetScore(awaySetScore + 1))}> Game</button>
          <button className="awayButtons__fieldGoal" onClick = {() => awaySetScore < 6 ? setAwaySetScore(awaySetScore + 1) : setAwaySetScore(0)}> Set</button>
        </div>
      </section>
      </div>
    </div>
  );
}

const rootElement = document.getElementById ("root");
ReactDOM.render(<App />, rootElement)
export default App;

