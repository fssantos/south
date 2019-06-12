const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const resolveAvailability = book => {
    if (book.price) return book;
    return { ...book, price: 'INDISP.' };
};

const resolveTumbImg = book => {
    if (book.tumbImg) return book;
    return {
        ...book,
        tumbImg: 'https://via.placeholder.com/169x230.png?text=IMAGEM+N%C3%83O+DISPON%C3%8DVEL'
    };
};

const resolvePriceToBRL = book => ({
    ...book,
    price: book.price === 'INDISP.' ? book.price : `R$${book.price}`,
    oldPrice: book.oldPrice === '' ? book.oldPrice : `R$${book.oldPrice}`
});

const extractInfos = book => {
    const { id, volumeInfo, saleInfo } = book;
    return {
        id,
        title: volumeInfo.title || '',
        tumbImg: volumeInfo.imageLinks.thumbnail || '',
        stars: volumeInfo.averageRating || 0,
        author: volumeInfo.authors ? volumeInfo.authors[0] : '',
        oldPrice: saleInfo.listPrice ? saleInfo.listPrice.amount : '',
        price: saleInfo.retailPrice ? saleInfo.retailPrice.amount : ''
    };
};

const parseBook = pipe(
    resolveAvailability,
    resolvePriceToBRL,
    resolveTumbImg
);

const sanitizeBook = pipe(
    extractInfos,
    parseBook
);

module.exports = { parseBook, extractInfos, sanitizeBook };
