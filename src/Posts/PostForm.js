import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    post: PropTypes.object,
  }

  static defaultProps = {
    post: {}
  };

  state = {
    id: this.props.post.id || '',
    title: this.props.post.title || '',
    body: this.props.post.body || ''
  };
  // reuseable handleInput
  handleInput = (e) => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({
      ...formData
    });
  };
  render() {
    const { onSubmit } = this.props;
    const { title, body, id } = this.state;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            variables: {
              title,
              body,
              id
            }
          })
            .then(() => {
              this.setState({
                title: '',
                body: ''
              });
            })
            .catch((err) => console.log(err));
        }}
      >
        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={this.handleInput}
          value={title}
        />
        <textarea
          name="body"
          type="text"
          placeholder="body"
          onChange={this.handleInput}
          value={body}
        />
        <button>Submit</button>
      </form>
    );
  }
}
