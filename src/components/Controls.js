import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { refresh, startTimer, stopTimer, tick } from "../actions";

class Controls extends React.Component {
  refreshInterface = () => {
    this.props.stopTimer();
    this.props.refresh();
  };

  stopTimer = () => {
    clearInterval(this.props.timerInterval);
    this.props.stopTimer();
  };

  dealWithTimer = () => {
    if (this.props.isRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  };

  startTimer = () => {
    this.props.startTimer(
      setInterval(() => {
        this.props.tick();
        if (this.props.ticksRemaining === 0) {
          console.log("DONE!");
          // this.alarm()
        }
      }, 1000)
    );
  };
  render() {
    return (
      <div className="arrows" style={{ width: "50%", margin: "auto" }}>
        <div id="start_stop" onClick={this.dealWithTimer}>
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faPause} />
        </div>
        <div id="reset" onClick={this.refreshInterface}>
          <FontAwesomeIcon icon={faRefresh} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    timerInterval: state.timer.interval,
    isRunning: state.timer.isRunning,
    secondsRemaining: state.timer.secondsRemaining,
  };
};

export default connect(mapStateToProps, {
  stopTimer,
  refresh,
  startTimer,
  stopTimer,
  tick,
})(Controls);
