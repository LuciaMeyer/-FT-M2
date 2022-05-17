const { createStore } = require('redux');

// const createStore = redux.createStore;

// creo mis constantes 
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO';
const initialState = {
  todos: []
}


// creo el reducer
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((text, i) => i !== action.payload)
      }
    default:
      return state;
  }
}

// creo el store diciendolé qué reducer usar
const store = createStore(rootReducer);

// mi archivo de js se subscribe al store con este método
store.subscribe(() => {
  console.log('Subscription: ', store.getState());
});

// tengo mi action creator
function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}
// tengo otra action creator
function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index
  }
}
// despacho las actions
store.dispatch(addTodo('Comprar pan'))
store.dispatch(addTodo('Correr'))
store.dispatch(removeTodo(1))
// pregunto por el nuevo estado
console.log(store.getState());