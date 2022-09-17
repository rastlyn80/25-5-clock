import React from "react";
import Incremental from "./Incremental";

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <div className="main">
          <h2>25 + 5 Clock</h2>
          <div className="arrows">
            <Incremental title="Break Length" initialValue="5" callBack="" />
            <Incremental title="Break Length" initialValue="5" callBack="" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
