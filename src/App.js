import React, { Component } from 'react';
import NewPost from './components/NewPost';
import CreatePost from './containers/CreatePost';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Post from './components/Post';
import PostList from './containers/PostList';

const stylesApp = {
  marginTop: 40
}

class App extends Component {
  /*
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <NewPost />
          </div>
          <div className="col-md-6">
            Display Post
          </div>
        </div>
      </div>
    );
  }*/
  render() {
    return (
      <div className="container">
        <div className="row" style={ stylesApp }>
          <div className="col-md-6">
            <CreatePost />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;