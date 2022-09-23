import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { sessionRefresh, breakRefresh, stopTimer } from "../actions";

class Controls extends React.Component {
  refreshInterface = () => {
    this.props.stopTimer();
    this.props.sessionRefresh();
    this.props.breakRefresh();
  };
  render() {
    return (
      <div className="arrows" style={{ width: "50%", margin: "auto" }}>
        <div id="start_stop">
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

export default connect(null, { stopTimer, sessionRefresh, breakRefresh })(
  Controls
);
