import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { BrowserRouter } from 'react-router-dom';

import { Welcome } from '@storybook/react/demo';
import defaultTheme from '../src/constants/defaultTheme';
import { ThemeProvider } from 'styled-components';

import { SectionIcon } from './mocks';

import Header from '../src/components/Header';
import SectionItem from '../src/components/SectionItem';

addDecorator(storyFn => (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>{storyFn()}</BrowserRouter>
    </ThemeProvider>
));

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Header', module).add('with large screen', () => (
    <Header
        onChange={() => alert('Value is changing')}
        onClick={() => alert('Search button clicked!')}
    />
));

storiesOf('SectionItem', module).add('sci-fi sample', () => (
    <SectionItem
        onClick={tag => alert(tag)}
        tag="Ficção"
        Icon={<SectionIcon size={18} color={defaultTheme.primaryFontColor} />}
    />
));
