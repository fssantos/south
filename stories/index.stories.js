import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { BrowserRouter } from 'react-router-dom';

import { Welcome } from '@storybook/react/demo';
import defaultTheme from '../src/constants/defaultTheme';
import { ThemeProvider } from 'styled-components';

import Header from '../src/components/Header';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Header', module).add('with large screen', () => (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            <Header
                onChange={() => alert('Value is changing')}
                onClick={() => alert('Search button clicked!')}
            />
        </BrowserRouter>
    </ThemeProvider>
));
