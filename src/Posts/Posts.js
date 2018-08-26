import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

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
      <ul>
        <Query query={POSTS_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return 'Loading...';
            const { posts } = data;
            return posts.map((post) => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
              </li>
            ));
          }}
        </Query>
      </ul>
    );
  }
}
