export function getBooks(state) {
    const resp = state.get('books');
    return resp.items || [];
}

export function getFilter(state) {
    const resp = state.get('filter');
    console.log(resp);
    return resp;
}

export function getStartIndex(state) {
    const resp = state.get('books').startIndex;
    console.log({ resp });
    return resp;
}
