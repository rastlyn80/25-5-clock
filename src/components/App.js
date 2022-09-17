import React from "react";
import Incremental from "./Incremental";

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <div className="main">
          APP COMPONENT
          <Incremental title="Break Length" initialValue="5" callBack="" />
        </div>
      </div>
    );
  }
}

export default App;
