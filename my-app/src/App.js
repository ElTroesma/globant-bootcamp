import React, { Component } from 'react';
import styles from './App.css';

class MovieApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showConfirmation = this.showConfirmation.bind(this);
    this.arrayClear = this.arrayClear.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="form-container">
          <div className="logo ilogo"></div>
          <p className="form-tittle">Your favorite movie!</p>

          <form onSubmit={this.handleSubmit}>
            <input type="text" className="input" required placeholder="Name" onChange={this.handleChange} value={this.state.text}/>
            <button type="submit" className="submitbttn">Submit!</button>
          </form>

        </div>

        <div className="output">
          <div className="logo ologo"></div>
          <p className="form-tittle">These are your favorite movies!</p>
          <hr className="separation"/>
          <div id="output" className="list-container">
            <MovieList handleRemoveItem={this.handleRemoveItem} movies={this.state.movies} />
            <button onClick={this.showConfirmation} className="submitbttn">Clear list</button>
          </div>
        </div>

        <div id="hideQuestion" className="hideModal">
          <div className="form-container">
            <p className="form-tittle">Do you really want to clear your list?</p>
            <hr className="separation"/>
            <button className="submitbttn modalbtn" id="hideQuestion" onClick={this.arrayClear}>Yes</button>
            <button className="submitbttn modalbtn" id="hideQuestion">No</button>
          </div>
        </div>

        <p className="design">Designed by Juan Garcia</p>
      </div>

    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newMovie = {
      id: this.state.movies.length,
      text: this.state.text
    };
    this.setState(state => ({
      movies: state.movies.concat(newMovie),
      text: ''
    }));
  }
  showConfirmation() {
    var question = document.getElementById('hideQuestion');

    question.style.display = 'flex';
    question.addEventListener('click', function() {
      question.style.display = 'none';
    });
  }
  arrayClear() {
    this.setState(state => ({
      movies: [],
      text: ''
    }));
  }
  handleRemoveItem(id) {
    console.log(id);
    const movieIndex = this.state.movies.findIndex(movie => {
      return movie.id == id;
    });
    let movies = this.state.movies;
    movies.splice(movieIndex, 1);
    this.setState({
      movies: movies
    });
  }
}

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }
  render() {
    return (
      <ul className="list-movie">
        {this.props.movies.map(movie => (
          <li key={movie.id} className="list-movie-item" onClick={this.removeItem.bind(this, movie.id)} >{movie.text}</li>
        ))}
      </ul>
    );
  }

  removeItem(id) {
    this.props.handleRemoveItem(id);
  }
}

export default MovieApp;
