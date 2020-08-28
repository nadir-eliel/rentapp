import React, { Component } from 'react';
import BuildingList from './BuildingList';

export default class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingSelected: undefined,
    };
  }

  render() {
    return <div>"Buildings"</div>;
  }
}
