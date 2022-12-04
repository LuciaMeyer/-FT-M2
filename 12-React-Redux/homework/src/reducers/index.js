import {GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAV, REMOVE_MOVIE_FAV, GET_POST} from '../actions/index';

const initialState = {
    moviesFav: [],
    moviesLoaded: [],
    movieDetail: {},
    loading: false,
  };

  function rootReducer (state = initialState, action) {
    // {type: GET_MOVIES, payload: json} --> {} payload es objeto json de la búsqueda por título
    if (action.type === GET_MOVIES) {
        return {
            ...state,
            moviesLoaded: action.payload.Search // guardo en Loaded todos los {} de la búsqueda por título --> propiedad Search = [{peli1},{peli2},{peli3}...]
        };
    }

    // { type: ADD_MOVIE_FAV, payload } --> {} payload un es objeto de peli
    if (action.type === ADD_MOVIE_FAV) {
        return {
            ...state, 
            moviesFav: state.moviesFav.concat(action.payload) // a lo q tenía dentro del [{}, {}] le agrego nuevo objeto {} 
        };
    }
    
    // {type: GET_MOVIE_DETAIL, payload: json} --> {} payload es un objeto con los detalles
    if (action.type === GET_MOVIE_DETAIL) {
        return {
            ...state,
            movieDetail: action.payload
        };
    }


    // {type: REMOVE_MOVIE_FAV, payload} --> payload es id de la peli a eliminar (q es un objeto)
    if (action.type === REMOVE_MOVIE_FAV) {
        return {
            ...state,
            moviesFav: state.moviesFav.filter(m => m.id !== action.payload) // devuelvo un arreglo con las pelis q sean diferentes a la del id a eliminar
        }
    }
    if(action.type === GET_POST){
        return {
            ...state,
            loading: true,
          }
    }
    return state;
}

export default rootReducer;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    }
}