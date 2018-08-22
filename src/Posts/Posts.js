import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`;

export default class componentName extends Component {
  render() {
    return (
      <Query query={POSTS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return 'Loading...';
          const { posts } = data;
          return posts.map((post) => <h1>{post.title}</h1>);
        }}
      </Query>
    );
  }
}
