import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container } from './styles';

class BooksScreen extends React.Component {
    render() {
        return <Container />;
    }
}

export default withRouter(BooksScreen);
