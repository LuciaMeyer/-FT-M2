export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE_FAV = 'ADD_MOVIE_FAV';
export const REMOVE_MOVIE_FAV = 'REMOVE_MOVIE_FAV';
export const GET_POST = 'GET_POST';


// con request a la API trae todas las peliculas según título ingresado
// payload es json {} 
export function getMovies (titulo) {
    return function (dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=fc7facd5&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch( {type: GET_MOVIES, payload: json} );
        });
        
    }
}

// traer los detalles de la peli especifica
// payload es el objeto con los detalles de la pelicula que seleccionamos
export function getMovieDetail (idMovie) {
    return function (dispatch) {
        dispatch(getPost());
        fetch(`http://www.omdbapi.com/?apikey=fc7facd5&i=${idMovie}`)
        .then(response => response.json())
        .then(json => {
            dispatch( {type: GET_MOVIE_DETAIL, payload: json} )
        })
    }
}

// agregar peli a favoritos
// payload que pasamos es nombre de la peli favorita
export function addMovieFavorite (payload) {
    return {
        type: ADD_MOVIE_FAV,
        payload 
    }
}

// eliminar peli de favoritos
// payload es la pelicula a eliminar (por id)
export function removeMovieFavorite (payload) {
    return {
        type: REMOVE_MOVIE_FAV,
        payload
    }
}

export function getPost() {
    return {
      type: GET_POST,
    }
  }