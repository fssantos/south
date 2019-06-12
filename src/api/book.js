import { get } from '../lib/HTTP';

export function getBooksFromApi({ searchTerm, startIndex }) {
    return get(`/volumes?q=/${searchTerm}&startIndex=${startIndex}`);
}
