import { get } from '../lib/HTTP';

export function getBooksFromApi(url) {
    return get(`/books/${url}`);
}
