import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {addMovieFavorite, getMovies} from '../../actions'
import './Buscador.css';


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = { // ESTADO LOCAL accedo como this.state
      title: ""
    };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.setState({title: ''});
  }
  
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {
            this.props.movies === undefined ? (
              <h5>No se encontró la Película</h5>
              ) : (
              this.props.movies.map(m => (
              <li key= {m.imdbID}>
                <Link to={`/movie/${m.imdbID}`}>{m.Title}</Link>
                <button onClick={() => this.props.addMovieFavorite({ 
                    title: m.Title,
                    id: m.imdbID,
                    year: m.Year,
                    img: m.Poster
                    })
                  }>☆
                </button>   
              </li>
              ))
            )
          }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded // ESTADO GLOBAL...accedo como this.props.movies --> [{},{},{}]
  };
}

export default connect(mapStateToProps,{addMovieFavorite, getMovies})(Buscador);