import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchBooks, fetchBooksCompleted } from '../ducks';
import { getBooksFromApi } from '../api';

function* fetchBooksSaga(action) {
    const { meetingId } = action.payload;
    try {
        const notes = yield call(() => getBooksFromApi(`search/?meetingId=${meetingId}`));
        yield put(fetchBooksCompleted({ notes }));
    } catch (error) {
        yield put(fetchBooksCompleted(error));
    }
}

export default function* bookSaga() {
    yield all([takeLatest(fetchBooks, fetchBooksSaga)]);
}
