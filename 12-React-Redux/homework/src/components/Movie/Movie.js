import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';



class Movie extends React.Component {

    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id)
    }


    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula
                <h5>{this.props.movie.Title}</h5>
                <p>{this.props.movie.Plot}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail // ESTADO GLOBAL...accedo como this.props.movie 
    }
}


export default connect(mapStateToProps, { getMovieDetail })(Movie);