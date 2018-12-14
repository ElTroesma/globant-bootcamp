import React, { Component } from 'react';
import styles from './App.css';

class MovieApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
            <MovieList movies={this.state.movies} />
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
      text: this.state.text
    };
    this.setState(state => ({
      movies: state.movies.concat(newMovie),
      text: ''
    }));
  }
}

class MovieList extends React.Component {
  render() {
    return (
      <ul className="list-movie">
        {this.props.movies.map(movie => (
          <li key={movie.id} className="list-movie-item">{movie.text}</li>
        ))}
      </ul>
    );
  }
}

export default MovieApp;
