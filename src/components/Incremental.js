// This Component will be reusable to represent both the Break Length and the Session Length controllers

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class Incremental extends React.Component {
  render() {
    return (
      <div className="incremental">
        {this.props.title}
        <div className="arrows">
          <FontAwesomeIcon icon={faArrowUp} />
          {this.props.initialValue}
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
    );
  }
}

export default Incremental;
