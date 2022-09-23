import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRefresh } from "@fortawesome/free-solid-svg-icons";

class Controls extends React.Component {
  render() {
    return (
      <div className="arrows" style={{ width: "50%", margin: "auto" }}>
        <div id="start_stop">
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faPause} />
        </div>
        <div id="reset">
          <FontAwesomeIcon icon={faRefresh} />
        </div>
      </div>
    );
  }
}

export default Controls;
