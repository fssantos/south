import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import defaultTheme from './constants/defaultTheme';

import Header from './components/Header';
import Home from './containers/Home';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={defaultTheme}>
                <div>
                    <Header
                        onChange={() => alert('changed text')}
                        onClick={() => alert('clicked on search')}
                    />
                    <Switch>
                        <Route path="/home" component={() => <Home />} />
                        <Route path="/testing2" component={() => <p>Hello</p>} />

                        <Redirect to="/home" />
                    </Switch>
                </div>
            </ThemeProvider>
        );
    }
}

export default withRouter(connect()(App));
