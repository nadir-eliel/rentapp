import React, { Component } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

export default class AddCommentaryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: undefined,
      text: undefined,
      idProperty: undefined,
    };
  }

  handleChangeText(e) {
    this.setState({ text: e.target.value });
  }

  handleClickEnviar(e) {
    const newComment = {
      comment: this.state.text,
    };
    this.props.addComment(newComment);

    //codigo para enviar el comentario
  }

  render() {
    return (
      <div className="addCommentary">
        <form onSubmit={this.addComment}>
          <div
            className="field"
            style={{
              marginLeft: 10,
            }}
          ></div>
          <div className="field">
            <div
              className="control"
              style={{
                marginLeft: 20,
                width: 400,
              }}
            >
              <textarea
                style={{
                  minHeight: 80,
                }}
                value={this.state.text}
                className="textarea"
                name="text"
                placeholder="Agregar un comentario"
                onChange={this.handleChangeText.bind(this)}
              ></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <Button
                style={{ marginLeft: 20, marginTop: 10 }}
                variant="contained"
                color="primary"
                onClick={this.handleClickEnviar.bind(this)}
                endIcon={<SendIcon>ENVIAR</SendIcon>}
              >
                ENVIAR
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
