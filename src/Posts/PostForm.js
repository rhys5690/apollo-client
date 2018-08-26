import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

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
      <Mutation
        mutation={NEW_POST}
        variables={{
          title,
          body
        }}
      >
        {createPost => (
          <form onSubmit={(e) => {
            e.preventDefault();
            createPost().then(() => {
              this.setState({
                title: '',
                body: ''
              })
            }).catch(err => console.log(err))
          }}>
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
        )}
      </Mutation>
    );
  }
}

const NEW_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(data: { status: PUBLISHED, title: $title, body: $body }) {
      title
      body
      id
    }
  }
`;
