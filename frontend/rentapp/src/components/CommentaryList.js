import React, { Component } from 'react';
import Comment from './CommentaryCard';

export default class CommentaryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  render() {
    return (
      <section className="section">
        {this.props.comments.map((comment) => {
          return comment.map((commentary) => {
            return (
              <Comment
                user={commentary.user_name}
                key={commentary._id}
                text={commentary.comment}
                created_at={commentary.created_at}
              />
            );
          });
        })}
      </section>
    );
  }
}
