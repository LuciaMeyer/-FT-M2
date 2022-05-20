import {GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAV, REMOVE_MOVIE_FAV} from '../actions.index.js';

const initialState = {
    moviesFav: [],
    moviesLoaded: [],
    movieDetail: {}
  };

export default (state = initialState, action) => {
    // {type: GET_MOVIES, payload: json} --> {} payload es objeto json de la búsqueda por título
    if (action.type === GET_MOVIES) {
        return {
            ...state,
            moviesLoaded: action.payload.Search // guardo en Loaded todos los {} de la búsqueda por título --> propiedad Search = [{peli1},{peli2},{peli3}...]
        };
    }

    // {type: GET_MOVIE_DETAIL, payload: json} --> {} payload es objeto por id con los detalles
    if (action.type === GET_MOVIE_DETAIL) {
        return {
            ...state,
            movieDetail: action.payload
        };
    }

    // { type: ADD_MOVIE_FAV, payload } --> {} payload es objeto de peli
    if (action.type === ADD_MOVIE_FAV) {
        return {
            ...state, 
            moviesFav: state.moviesFav.concat(action.payload) // a lo q tenía dentro del [{}, {}] le agrego nuevo objeto {} 
        };
    }

    // {type: REMOVE_MOVIE_FAV, payload: idMovie} --> payload es id de la peli a eliminar    
    if (action.type === REMOVE_MOVIE_FAV) {
        return {
            ...state,
            moviesFav: state.moviesFav.filter(m => m.imdbID !== action.payload) // devuelvo un arreglo con las pelis q sean diferentes a la del id (a eliminar)
        }
    } 
}