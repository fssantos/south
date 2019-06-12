export function getBooks(state) {
    const resp = state.get('books');
    return resp.items || [];
}
