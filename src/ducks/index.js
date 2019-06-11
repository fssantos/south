import { combineReducers } from 'redux-immutable';
import books from './book';

export * from './book';

export default combineReducers({
    books
});
