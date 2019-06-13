import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';
import defaultTheme from './constants/defaultTheme';

import Header from './containers/Header';
import Home from './containers/Home';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={defaultTheme}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={() => <Home />} />
                    </Switch>
                </div>
            </ThemeProvider>
        );
    }
}

export default withRouter(connect()(App));
