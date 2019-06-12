import { combineReducers } from 'redux-immutable';
import books from './book';
import filter from './filter';
import favorite from './favorite';

export * from './book';
export * from './filter';
export * from './favorite';

export default combineReducers({
    books,
    filter,
    favorite
});
