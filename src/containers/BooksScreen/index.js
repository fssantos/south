import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetchBooks } from '../../ducks';
import { getBooks } from '../../selectors';
import { sanitizeBook } from './helper';
import BookItem from '../../components/BookItem';

import { Container } from './styles';

class BooksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startIndex: '1'
        };

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const { startIndex } = this.state;
        const { onFetchBooks } = this.props;
        onFetchBooks({ startIndex });
    }

    render() {
        console.log(this.state);
        const { books, totalItems } = this.props;
        console.log({ books, totalItems });
        return (
            <InfiniteScroll
                dataLength={books.length}
                next={this.fetchData}
                hasMore
                loader={<h4>Loading...</h4>}
            >
                <Container>
                    {books.map(e => (
                        <BookItem onClick={() => alert(e.id)} key={e.id} {...e} />
                    ))}
                </Container>
            </InfiniteScroll>
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
        onFetchBooks: ({ startIndex }) => dispatch(fetchBooks({ startIndex }))
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
