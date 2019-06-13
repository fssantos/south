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

storiesOf('BookItem', module).add('sample', () => (
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
));
