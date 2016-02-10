import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from   './reducer_active_book'

//This is the global state
//For each key, assign a reducer. THis is the redux state
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
