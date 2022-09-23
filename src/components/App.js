import React from "react";
import SessionIncremental from "./SessionIncremental";
import BreakIncremental from "./BreakIncremental";
import CountDown from "./CountDown";
import Controls from "./Controls";
import Credits from "./Credits";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <h2 className="green-caption">25 + 5 CLOCK</h2>
          <div className="arrows">
            <SessionIncremental />
            <BreakIncremental />
          </div>
          <div>
            <CountDown />
          </div>
          <Controls />
          <Credits />
        </div>
      </div>
    );
  }
}

export default App;
