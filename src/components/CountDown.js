import React from "react";
import { connect } from "react-redux";

class CountDown extends React.Component {
  timerCaption = () => {
    return this.props.isSession ? "SESSION" : "BREAK";
  };

  timeFormat = () => {
    let minutes = Math.floor(this.props.secondsRemaining / 60);
    let seconds = this.props.secondsRemaining - minutes * 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  render() {
    return (
      <div id="main-timer">
        <div id="timer-label">{this.timerCaption()}</div>
        <div id="time-left">{this.timeFormat()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    secondsRemaining: state.timer.secondsRemaining,
    isSession: state.timer.isSession,
  };
};

export default connect(mapStateToProps)(CountDown);
