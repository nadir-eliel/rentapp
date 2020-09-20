import React, { Component } from 'react';
import AddCommentaryForm from './AddCommentaryForm';
import AuthHelperMethods from '../services/AuthHelperMethods';

const userHelper = new AuthHelperMethods();

export default class AddCommentary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addCommentary = (newCommentary) => {
    const token = userHelper.getToken();
    console.log(
      'http://localhost:4000/api/comments/create/' + this.props.idProperty
    );
    console.log('Comentario', newCommentary);
    fetch(
      'http://localhost:4000/api/comments/create/' + this.props.idProperty,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(newCommentary),
      }
    );
  };

  render() {
    return <AddCommentaryForm addComment={this.addCommentary} />;
  }
}
