import React from "react";

class CountDown extends React.Component {
  render() {
    return (
      <div id="main-timer">
        <div id="timer-label">SESSION</div>
        <div id="time-left">25:00</div>
      </div>
    );
  }
}

export default CountDown;
