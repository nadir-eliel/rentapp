import React, { Component } from 'react';
import AddPropertyForm from './AddPropertyForm';

export default class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addProperty = (newProperty) => {
    console.log('se intenta insertar', newProperty);
    fetch('http://localhost:4000/api/apartments/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProperty),
    });
    this.props.callbackFromParent({});
  };

  addPropertyTest = (newProperty) => {
    console.log('se intenta insertar', newProperty);
  };

  render() {
    return (
      <div>
        <AddPropertyForm addProperty={this.addProperty} />
      </div>
    );
  }
}
