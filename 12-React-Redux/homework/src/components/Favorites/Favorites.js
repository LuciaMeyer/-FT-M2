import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from '../../actions';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.moviesFav?.map(m => (
              <li key= {m.id}>
              <Link to={`/movie/${m.id}`}>{m.title}</Link>
              <button onClick={() => this.props.removeMovieFavorite(m.id)}>x</button>   
            </li> 
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moviesFav: state.moviesFav // ESTADO GLOBAL...accedo como this.props.moviesFav
  }
}

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
