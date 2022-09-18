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
      <div className="incremental">
        Session Length
        <div className="arrows">
          <FontAwesomeIcon
            icon={faArrowUp}
            onClick={this.incrementSessionLength}
          />
          {this.props.sessionLength}
          <FontAwesomeIcon
            icon={faArrowDown}
            onClick={this.decrementSessionLength}
          />
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