import React from "react";
import SessionIncremental from "./SessionIncremental";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <h2>25 + 5 Clock</h2>
          <div className="arrows">
            <SessionIncremental />
            <SessionIncremental />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
