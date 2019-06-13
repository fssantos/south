import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import { changeBooksFilter, fetchMoreBooks, favoriteClick, fetchFavorites } from '../../ducks';
import { getBooks } from '../../selectors';
import { sanitizeBook } from './helper';
import BookItem from '../../components/BookItem';

import { Container } from './styles';

class BooksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startIndex: 1
        };

        this.fetchData = this.fetchData.bind(this);
        this.fetchInitialData = this.fetchInitialData.bind(this);
    }

    componentDidMount() {
        this.fetchInitialData();
    }

    fetchInitialData() {
        const { onChangeBooksFilter, onFetchFavorites } = this.props;
        onChangeBooksFilter({ filter: 'Programação' });
        onFetchFavorites();
    }

    fetchData() {
        const { onFetchMoreBooks } = this.props;

        onFetchMoreBooks();

        /*         this.setState(
            state => ({
                startIndex: filter !== state.filter ? 2 : state.startIndex + 1,
                filter: filter !== state.filter ? filter : state.filter
            }),
            () => {
                onFetchBooks({ startIndex: this.state.startIndex, filter: this.state.filter });
            }
        ); */
    }

    handleFavoriteClicked({ item }) {
        const { onFavoriteClick } = this.props;
        console.log('I was clicked', { item });
        onFavoriteClick({ item });
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
                loader={<h4 style={{ alignSelf: 'center' }}>Loading...</h4>}
            >
                <Container>
                    {books.map(e => (
                        <BookItem
                            onClick={() => alert(e.id)}
                            onFavoriteClick={() => this.handleFavoriteClicked({ item: e })}
                            key={e.id}
                            {...e}
                        />
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
        onChangeBooksFilter: ({ filter }) => dispatch(changeBooksFilter({ filter })),
        onFetchMoreBooks: () => dispatch(fetchMoreBooks()),
        onFavoriteClick: ({ item }) => dispatch(favoriteClick({ item })),
        onFetchFavorites: () => dispatch(fetchFavorites())
    };
}

BooksScreen.propTypes = {
    books: PropTypes.array,
    totalItems: PropTypes.number,
    onChangeBooksFilter: PropTypes.func.isRequired,
    onFetchMoreBooks: PropTypes.func.isRequired,
    onFavoriteClick: PropTypes.func.isRequired,
    onFetchFavorites: PropTypes.func.isRequired,
};

BooksScreen.defaultProps = {
    books: { items: [] },
    totalItems: 0
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksScreen);
