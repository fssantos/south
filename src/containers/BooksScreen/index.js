import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchBooks } from '../../ducks';
import { getBooks } from '../../selectors';

import { Container } from './styles';

class BooksScreen extends React.Component {
    componentDidMount() {
        const { onFetchBooks } = this.props;
        onFetchBooks();
    }
    render() {
        const { books, totalItems } = this.props;
        console.log('books on container:', { books });
        console.log({ totalItems });
        return <Container />;
    }
}

function mapStateToProps(state) {
    return {
        books: getBooks(state).items,
        totalItems: getBooks(state).totalItems
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchBooks: () => dispatch(fetchBooks())
    };
}

BooksScreen.propTypes = {
    books: PropTypes.array,
    totalItems: PropTypes.number,
    onFetchBooks: PropTypes.func.isRequired
};

BooksScreen.defaultProps = {
    books: [],
    totalItems: 0
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksScreen);
