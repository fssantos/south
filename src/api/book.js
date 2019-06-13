import store from 'store';
import { get } from '../lib/HTTP';

export function getBooksFromApi({ searchTerm, startIndex }) {
    return get(`/volumes?q=/${searchTerm}&startIndex=${startIndex}`);
}

export const getFavoritesFromStorage = () => {
    const arr = [];
    store.each(value => {
        arr.push(value);
    });
    return arr;
};
