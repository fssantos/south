import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Welcome } from '@storybook/react/demo';
import defaultTheme from '../src/constants/defaultTheme';
import { ThemeProvider } from 'styled-components';

import { SectionIcon } from './mocks';

import { Header } from '../src/containers/Header';
import SectionItem from '../src/components/SectionItem';
import BookItem from '../src/components/BookItem';
import BookDetail from '../src/components/BookDetail';

addDecorator(storyFn => (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>{storyFn()}</BrowserRouter>
    </ThemeProvider>
));

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('SectionItem', module).add('sci-fi sample', () => (
    <SectionItem
        onClick={tag => alert(tag)}
        tag="Ficção"
        Icon={<SectionIcon size={18} color={defaultTheme.primaryFontColor} />}
    />
));

storiesOf('BookItem', module)
    .add('sample', () => (
        <BookItem
            id="1234"
            title="Curso de montagem e manutenção de computadores"
            tumbImg="https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230"
            stars={4}
            author="Marilane Almeida"
            price={'R$9.90'}
            oldPrice={'R$4.95'}
            onClick={() => {
                alert('clicked');
            }}
        />
    ))
    .add('with image placeholder', () => (
        <BookItem
            id="1234"
            title="Curso de montagem e manutenção de computadores"
            tumbImg="https://via.placeholder.com/169x230.png?text=IMAGEM+N%C3%83O+DISPON%C3%8DVEL"
            stars={4}
            author="Marilane Almeida"
            price={'R$9.90'}
            oldPrice={'R$4.95'}
            onClick={() => {
                alert('clicked');
            }}
        />
    ))
    .add('with unavailable price', () => (
        <BookItem
            id="1234"
            title="Curso de montagem e manutenção de computadores"
            tumbImg="https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230"
            stars={4}
            author="Marilane Almeida"
            price={'INDISP.'}
            oldPrice={'R$4.95'}
            onClick={() => {
                alert('clicked');
            }}
        />
    ))
    .add('without stars', () => (
        <BookItem
            id="1234"
            title="Curso de montagem e manutenção de computadores"
            tumbImg="https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230"
            stars={0}
            author="Marilane Almeida"
            price={'INDISP.'}
            oldPrice={'R$4.95'}
            onClick={() => {
                alert('clicked');
            }}
        />
    ))
    .add('with long title', () => (
        <BookItem
            id="1234"
            title="This is a long text just to see with it will not break lines etc etc etc etc etc etc"
            tumbImg="https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230"
            stars={0}
            author="Marilane Almeida"
            price={'INDISP.'}
            oldPrice={'R$4.95'}
            onClick={() => {
                alert('clicked');
            }}
        />
    ))
    .add('with long author name', () => (
        <BookItem
            id="1234"
            title="This is a long text just to see with it will not break lines etc etc etc etc etc etc"
            tumbImg="https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230"
            stars={0}
            author="This is a long text just to see with it will not break lines etc etc etc etc etc etc"
            price={'INDISP.'}
            oldPrice={'R$4.95'}
            onClick={() => {
                alert('clicked');
            }}
        />
    ));

storiesOf('BookDetail', module)
    .add('without description', () => (
        <div style={{ width: '50%' }}>
            <BookDetail
                id="1234"
                title="Curso de montagem e manutenção de computadores"
                tumbImg="https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230"
                stars={4}
                author="Marilane Almeida"
                price={'R$9.90'}
                oldPrice={'R$4.95'}
                onClick={() => {
                    alert('clicked');
                }}
                onFavoriteClick={() => {
                    alert('clicked');
                }}
                isFavorite={false}
                buyLink=""
                description="Test test test and test Test test test and testTest test test and testTest test test and testTest test test and testTest test test and testTest test test and test"
            />
        </div>
    ))
    .add('with a long description', () => (
        <div style={{ width: '50%' }}>
            <BookDetail
                id="1234"
                title="Curso de montagem e manutenção de computadores"
                tumbImg="https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230"
                stars={4}
                author="Marilane Almeida"
                price={'R$9.90'}
                oldPrice={'R$4.95'}
                onClick={() => {
                    alert('clicked');
                }}
                onFavoriteClick={() => {
                    alert('clicked');
                }}
                isFavorite={false}
                buyLink=""
                description={`This is a long description just to see with it will not break lines etc etc etc etc etc etc
                This is a long text just to see with it will not break lines etc etc etc etc etc etc
                This is a long text just to see with it will not break lines etc etc etc etc etc etc
                This is a long text just to see with it will not break lines etc etc etc etc etc etc
                This is a long text just to see with it will not break lines etc etc etc etc etc etc
                This is a long text just to see with it will not break lines etc etc etc etc etc etc`}
            />
        </div>
    ))
    .add('with favorite selected', () => (
        <div style={{ width: '50%' }}>
            <BookDetail
                id="1234"
                title="Curso de montagem e manutenção de computadores"
                tumbImg="https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230"
                stars={4}
                author="Marilane Almeida"
                price={'R$9.90'}
                oldPrice={'R$4.95'}
                onClick={() => {
                    alert('clicked');
                }}
                onFavoriteClick={() => {
                    alert('clicked');
                }}
                isFavorite={false}
                buyLink=""
                description="Test test test and test Test test test and testTest test test and testTest test test and testTest test test and testTest test test and testTest test test and test"
                isFavorite
            />
        </div>
    ))
    .add('with buy link ', () => (
        <div style={{ width: '50%' }}>
            <BookDetail
                id="1234"
                title="Curso de montagem e manutenção de computadores"
                tumbImg="https://books.google.com/books/content/images/frontcover/vJVFx11Y4toC?fife=w160-h230"
                stars={4}
                author="Marilane Almeida"
                price={'R$9.90'}
                oldPrice={'R$4.95'}
                onClick={() => {
                    alert('clicked');
                }}
                onFavoriteClick={() => {
                    alert('clicked');
                }}
                buyLink="https://play.google.com/store/books/details/Cl%C3%B3vis_Osvaldo_Gregorim_Michaelis_Gram%C3%A1tica_F%C3%A1cil?id=JIS6DQAAQBAJ"
                description="Test test test and test Test test test and testTest test test and testTest test test and testTest test test and testTest test test and testTest test test and test"
                isFavorite
            />
        </div>
    ));
