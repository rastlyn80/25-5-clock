// This Component will be reusable to represent both the Break Length and the Session Length controllers

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { incrementSession, decrementSession } from "../actions";

class sessionIncremental extends React.Component {
  incrementSessionLength = () => {
    this.props.incrementSession();
  };

  decrementSessionLength = () => {
    this.props.decrementSession();
  };

  render() {
    return (
      <div className="incremental" id="session-label">
        Session Length
        <div className="arrows">
          <div id="session-increment" onClick={this.incrementSessionLength}>
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
          <div id="session-length">{this.props.sessionLength}</div>
          <div id="session-decrement" onClick={this.decrementSessionLength}>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { sessionLength: state.sessionLength.value };
};

export default connect(mapStateToProps, { incrementSession, decrementSession })(
  sessionIncremental
);
