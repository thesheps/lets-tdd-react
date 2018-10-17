import React, { Component } from "react";

class NavigationButton extends Component {
  render() {
    return <button>{this.props.title}</button>;
  }
}

export default NavigationButton;
