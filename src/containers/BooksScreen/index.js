import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetchBooks, changeBooksFilter } from '../../ducks';
import { getBooks, getFilter } from '../../selectors';
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
        const { onFetchBooks, onChangeBooksFilter } = this.props;
        onFetchBooks({ startIndex });
        onChangeBooksFilter({ filter: 'matemática' });
    }

    render() {
        console.log(this.state);
        const { books, totalItems, filter } = this.props;
        console.log({ books, totalItems, filter });
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
        filter: getFilter(state),
        totalItems: getBooks(state).totalItems
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchBooks: ({ startIndex }) => dispatch(fetchBooks({ startIndex })),
        onChangeBooksFilter: ({ filter }) => dispatch(changeBooksFilter({ filter }))
    };
}

BooksScreen.propTypes = {
    books: PropTypes.array,
    totalItems: PropTypes.number,
    onFetchBooks: PropTypes.func.isRequired,
    onChangeBooksFilter: PropTypes.func.isRequired,
    filter: PropTypes.string
};

BooksScreen.defaultProps = {
    books: { items: [] },
    totalItems: 0,
    filter: ''
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksScreen);
