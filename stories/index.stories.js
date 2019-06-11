import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { BrowserRouter } from 'react-router-dom';

import { Welcome } from '@storybook/react/demo';
import defaultTheme from '../src/constants/defaultTheme';
import { ThemeProvider } from 'styled-components';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
