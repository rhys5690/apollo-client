import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const POST_QUERY = gql`
  query post {
    post(where: {id: "cjl1we5xsk9cd0980678p8d45"}) {
      title
      body
    }
  }
`;
export default class Post extends Component {
  render() {
    return (
      <Query query={POST_QUERY}>
        {({ data, loading }) => {
          if (loading) return 'loading...';
          const { post } = data;
          return <h1>{post.body}</h1>
        }}
      </Query>
    )
  }
}
