import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchBooks } from '../../ducks';
import { getBooks } from '../../selectors';
import { sanitizeBook } from './helper';
import BookItem from '../../components/BookItem';

import { Container } from './styles';

class BooksScreen extends React.Component {
    componentDidMount() {
        const { onFetchBooks } = this.props;
        onFetchBooks();
    }
    render() {
        const { books, totalItems } = this.props;
        console.log({ books, totalItems });
        return (
            <Container>
                {books.map(e => (
                    <BookItem onClick={() => alert(e.id)} key={e.id} {...e} />
                ))}
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: getBooks(state).map(e => sanitizeBook(e)),
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
    books: { items: [] },
    totalItems: 0
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksScreen);
