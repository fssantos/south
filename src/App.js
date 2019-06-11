import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import defaultTheme from './constants/defaultTheme';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={defaultTheme}>
                <div>
                    <Switch>
                        <Route path="/testing1" component={() => <p>Hello</p>} />
                        <Route path="/testing2" component={() => <p>Hello</p>} />

                        <Redirect to="/testing1" />
                    </Switch>
                </div>
            </ThemeProvider>
        );
    }
}

export default withRouter(connect()(App));
