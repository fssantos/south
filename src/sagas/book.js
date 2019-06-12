import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchBooks, fetchBooksCompleted } from '../ducks';
import { getBooksFromApi } from '../api';

function* fetchBooksSaga(action) {
    const { startIndex } = action.payload;
    const searchTerm = 'filosofia';
    /*     const { searchTerm } = action.payload; */
    try {
        const books = yield call(() => getBooksFromApi({ searchTerm, startIndex }));
        yield put(fetchBooksCompleted({ books }));
    } catch (error) {
        yield put(fetchBooksCompleted(error));
    }
}

export default function* bookSaga() {
    yield all([takeLatest(fetchBooks, fetchBooksSaga)]);
}
