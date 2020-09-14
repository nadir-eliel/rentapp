import React, { Component } from 'react';
import AddPropertyForm from './AddPropertyForm';

export default class AddBuilding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <AddPropertyForm />
      </div>
    );
  }
}
