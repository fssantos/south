import { createAction, handleActions } from 'redux-actions';

export const fetchBooks = createAction('FETCH_BOOKS');
export const fetchBooksCompleted = createAction('FETCH_BOOKS_COMPLETED');

export default handleActions(
    {
        [fetchBooksCompleted]: (state, { payload }) => payload.notes
    },
    []
);
