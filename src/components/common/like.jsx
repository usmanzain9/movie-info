import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "far fa-heart";
    if (this.props.liked) classes = "fas fa-heart";
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
      />
    );
  }
}

export default Like;
