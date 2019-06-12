import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchBooks, changeBooksFilter, fetchBooksCompleted } from '../ducks';
import { getBooksFromApi } from '../api';

function* fetchBooksSaga(action) {
    const { startIndex = 1, filter } = action.payload;
    /*     const { searchTerm } = action.payload; */
    try {
        const books = yield call(() => getBooksFromApi({ searchTerm: filter, startIndex }));
        yield put(fetchBooksCompleted({ books }));
    } catch (error) {
        yield put(fetchBooksCompleted(error));
    }
}

export default function* bookSaga() {
    yield all([
        takeLatest(fetchBooks, fetchBooksSaga),
        takeLatest(changeBooksFilter, fetchBooksSaga)
    ]);
}
