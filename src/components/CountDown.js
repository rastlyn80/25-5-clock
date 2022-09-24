import React from "react";
import { connect } from "react-redux";

class CountDown extends React.Component {
  timeFormat = () => {
    let minutes = Math.floor(this.props.secondsRemaining / 60);
    let seconds = this.props.secondsRemaining - minutes * 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  render() {
    return (
      <div id="main-timer">
        <div id="timer-label">SESSION</div>
        <div id="time-left">{this.timeFormat()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { secondsRemaining: state.timer.secondsRemaining };
};

export default connect(mapStateToProps)(CountDown);
