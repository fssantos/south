const { parseBook, extractInfos } = require('./helper');

test('when there is no price', () => {
    const expected = {
        title: 'Testing',
        tumbImg:
            'https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230',
        stars: 4,
        author: 'Marilane Almeida',
        price: 'INDISP.',
        oldPrice: 'R$4.95'
    };
    const actual = {
        title: 'Testing',
        tumbImg:
            'https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230',
        stars: 4,
        author: 'Marilane Almeida',
        price: '',
        oldPrice: '4.95'
    };
    expect(parseBook(actual)).toMatchObject(expected);
});

test('when should concat brazilian currency', () => {
    const expected = {
        title: 'Testing',
        tumbImg:
            'https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230',
        stars: 4,
        author: 'Marilane Almeida',
        price: 'R$24.9',
        oldPrice: 'R$4.95'
    };
    const actual = {
        title: 'Testing',
        tumbImg:
            'https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230',
        stars: 4,
        author: 'Marilane Almeida',
        price: '24.9',
        oldPrice: '4.95'
    };
    expect(parseBook(actual)).toMatchObject(expected);
});

test('when there is not thumb img', () => {
    const expected = {
        title: 'Testing',
        tumbImg: 'https://via.placeholder.com/169x230.png?text=IMAGEM+N%C3%83O+DISPON%C3%8DVEL',
        stars: 4,
        author: 'Marilane Almeida',
        price: 'R$24.9',
        oldPrice: 'R$4.95'
    };
    const actual = {
        title: 'Testing',
        tumbImg: '',
        stars: 4,
        author: 'Marilane Almeida',
        price: '24.9',
        oldPrice: '4.95'
    };
    expect(parseBook(actual)).toMatchObject(expected);
});

test('when there is no listPrice obj', () => {
    const expected = {
        title: 'Filosofia para corajosos',
        tumbImg:
            'http://books.google.com/books/content?id=evWFDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        stars: 5,
        author: 'Luiz Felipe Pondé',
        price: '',
        oldPrice: ''
    };
    const actual = {
        volumeInfo: {
            title: 'Filosofia para corajosos',
            authors: ['Luiz Felipe Pondé'],
            averageRating: 5,
            imageLinks: {
                smallThumbnail:
                    'http://books.google.com/books/content?id=evWFDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                thumbnail:
                    'http://books.google.com/books/content?id=evWFDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            }
        },
        saleInfo: {}
    };

    expect(extractInfos(actual)).toMatchObject(expected);
});

test('when there is no thumb img', () => {
    const expected = {
        title: 'Filosofia para corajosos',
        tumbImg: '',
        stars: 5,
        author: 'Luiz Felipe Pondé',
        price: 23.66,
        oldPrice: 24.9
    };
    const actual = {
        volumeInfo: {
            title: 'Filosofia para corajosos',
            authors: ['Luiz Felipe Pondé'],
            averageRating: 5,
            imageLinks: {
                smallThumbnail:
                    'http://books.google.com/books/content?id=evWFDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
            }
        },
        saleInfo: {
            listPrice: {
                amount: 24.9,
                currencyCode: 'BRL'
            },
            retailPrice: {
                amount: 23.66,
                currencyCode: 'BRL'
            }
        }
    };

    expect(extractInfos(actual)).toMatchObject(expected);
});

test('when there is no author', () => {
    const expected = {
        title: 'Filosofia para corajosos',
        tumbImg: '',
        stars: 5,
        author: '',
        price: 23.66,
        oldPrice: 24.9
    };
    const actual = {
        volumeInfo: {
            title: 'Filosofia para corajosos',
            averageRating: 5,
            imageLinks: {
                smallThumbnail:
                    'http://books.google.com/books/content?id=evWFDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
            }
        },
        saleInfo: {
            listPrice: {
                amount: 24.9,
                currencyCode: 'BRL'
            },
            retailPrice: {
                amount: 23.66,
                currencyCode: 'BRL'
            }
        }
    };

    expect(extractInfos(actual)).toMatchObject(expected);
});
