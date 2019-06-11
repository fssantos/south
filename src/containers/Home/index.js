import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container } from './styles';

import BooksScreen from '../BooksScreen';
import TabBar from '../TabBar';

class Home extends React.Component {
    render() {
        return (
            <Container>
                <TabBar />
                <BooksScreen />
            </Container>
        );
    }
}

export default withRouter(Home);
