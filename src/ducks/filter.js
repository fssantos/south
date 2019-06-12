import { createAction, handleActions } from 'redux-actions';

export const changeBooksFilter = createAction('CHANGE_BOOKS_FILTER');

export default handleActions(
    {
        [changeBooksFilter]: (state, { payload }) => payload.filter
    },
    []
);
