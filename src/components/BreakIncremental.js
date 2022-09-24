import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { incrementBreak, decrementBreak } from "../actions";

class BreakIncremental extends React.Component {
  incrementBreakLength = () => {
    this.props.incrementBreak();
  };

  decrementBreakLength = () => {
    this.props.decrementBreak();
  };

  render() {
    return (
      <div className="incremental" id="break-label">
        Break Length
        <div className="arrows">
          <div id="break-increment" onClick={this.incrementBreakLength}>
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
          <div id="break-length">{this.props.breakLength}</div>

          <div id="break-decrement" onClick={this.decrementBreakLength}>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { breakLength: state.timer.breakLength };
};

export default connect(mapStateToProps, { incrementBreak, decrementBreak })(
  BreakIncremental
);
