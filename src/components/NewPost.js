import React from 'react';
import axios from 'axios';

class NewPost extends React.Component {
    state = {
      title: '',
      body: ''
    };
  
    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      if (this.state.title.trim() && this.state.body.trim()) {
        console.log(this.state);
        this.props.onAddPost(this.state);
        this.handleReset();
      }
      /*axios.get('https://api.jsonbin.io/b/5c92604b9c83133c02788dc3')
        .then(res => {
            console.log(JSON.stringify(res));
        });
        axios.post('https://api.jsonbin.io/b',{"title": this.state.title, "body": this.state.body},{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(JSON.stringify(res));
        });*/
    };
  
    handleReset = () => {
      this.setState({
        title: '',
        body: ''
      });
    };
  
    render() {
      return (
        <div>
            <form onSubmit={ this.handleSubmit }>
            <div className="form-group">
                <input
                type="text"
                placeholder="Title"
                className="form-control"
                name="title"
                onChange={ this.handleInputChange }
                value={ this.state.title }
              />
            </div>
            <div className="form-group">
              <textarea
                cols="19"
                rows="8"
                placeholder="Body"
                className="form-control"
                name="body"
                onChange={ this.handleInputChange }
                value={ this.state.body }>
              </textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Add Post</button>
              <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
                Reset
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default NewPost;


