import { get } from '../lib/HTTP';

export function getBooksFromApi(searchTerm) {
    return get(`/volumes?q=/${searchTerm}`);
}
