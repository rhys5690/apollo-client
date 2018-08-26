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
    const { title, body } = this.state;
    return (
      <form>
        <input name="title" type="text" placeholder="title" onChange={this.handleInput} value={title} />
        <textarea name="body" type="text" placeholder="body" onChange={this.handleInput} value={body} />
        <button>Submit</button>
      </form>
    );
  }
}
