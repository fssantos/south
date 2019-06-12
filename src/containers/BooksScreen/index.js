import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetchBooks } from '../../ducks';
import { getBooks, getFilter } from '../../selectors';
import { sanitizeBook } from './helper';
import BookItem from '../../components/BookItem';

import { Container } from './styles';

class BooksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startIndex: 1,
            filter: ''
        };

        this.fetchData = this.fetchData.bind(this);
        this.fetchInitialData = this.fetchInitialData.bind(this);
    }

    componentDidMount() {
        this.fetchInitialData();
    }

    fetchInitialData() {
        const { startIndex } = this.state;
        const { onFetchBooks } = this.props;
        onFetchBooks({ startIndex });
    }

    fetchData() {
        const { onFetchBooks, filter } = this.props;

        this.setState(
            state => ({
                startIndex: filter !== state.filter ? 2 : state.startIndex + 1,
                filter: filter !== state.filter ? filter : state.filter
            }),
            () => {
                onFetchBooks({ startIndex: this.state.startIndex, filter: this.state.filter });
            }
        );
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
        onFetchBooks: ({ startIndex }) => dispatch(fetchBooks({ startIndex }))
    };
}

BooksScreen.propTypes = {
    books: PropTypes.array,
    totalItems: PropTypes.number,
    onFetchBooks: PropTypes.func.isRequired,
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
