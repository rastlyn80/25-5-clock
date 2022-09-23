import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  sessionRefresh,
  breakRefresh,
  startTimer,
  stopTimer,
} from "../actions";

class Controls extends React.Component {
  refreshInterface = () => {
    this.props.stopTimer();
    this.props.sessionRefresh();
    this.props.breakRefresh();
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
        console.log("TIMER");
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
  };
};

export default connect(mapStateToProps, {
  stopTimer,
  sessionRefresh,
  breakRefresh,
  startTimer,
  stopTimer,
})(Controls);
