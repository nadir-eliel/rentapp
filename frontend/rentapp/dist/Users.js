import React, { Component } from 'react';
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelected: undefined
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "Users"
    }, "\"User\"");
  }

}