import React, { Component } from 'react';
import PostForm from './PostForm';

export default class NewPost extends Component {
  render() {
    return (
      <div>
        <h1>New Post</h1>
        <PostForm />
      </div>
    );
  }
}
