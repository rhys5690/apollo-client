import React, { Component } from 'react';

export default class PostForm extends Component {
  state = {
    title: '',
    body: ''
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
    const { title, body } = this.state;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            variables: {
              title,
              body
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
