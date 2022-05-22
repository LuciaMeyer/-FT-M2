import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, getPost} from '../../actions/index';
import './Movie.css';



class Movie extends React.Component {

    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id)
    }


    render() {
        return (
            <div className="movie-detail">
                
                {
                this.props.loadin ? 'Cargando...' : 
                <div>
                    <h5>{this.props.movie.Title}</h5>
                    <p>{this.props.movie.Plot}</p>
                </div>                
                }       
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail,
        loading: state.loading
    }
}


export default connect(mapStateToProps, { getMovieDetail, getPost })(Movie);