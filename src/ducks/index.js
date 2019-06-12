import { combineReducers } from 'redux-immutable';
import books from './book';
import filter from './filter';

export * from './book';
export * from './filter';

export default combineReducers({
    books,
    filter
});
