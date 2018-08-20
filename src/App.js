import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjl1w9gv1003y01ahhwfmkyjg/master'
});

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`;

client.query({
  query: POSTS_QUERY
}).then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Query query={POSTS_QUERY}>
            {({data, loading, error}) => {
              if (loading) return "Loading...";
              const { posts } = data;
              return posts.map(post => <h1>{post.title}</h1>)
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
