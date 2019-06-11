import { all, fork } from 'redux-saga/effects';
import book from './book';

export default function* mainSaga() {
    yield all([fork(book)]);
}
