import React from "react";
import SessionIncremental from "./SessionIncremental";
import BreakIncremental from "./BreakIncremental";
import CountDown from "./CountDown";
import Controls from "./Controls";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <h2>25 + 5 Clock</h2>
          <div className="arrows">
            <SessionIncremental />
            <BreakIncremental />
          </div>
          <div>
            <CountDown />
          </div>
          <Controls />
        </div>
      </div>
    );
  }
}

export default App;
