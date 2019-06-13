import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from 'react-modal';

import { changeBooksFilter, fetchMoreBooks, favoriteClick, fetchFavorites } from '../../ducks';
import { getBooks } from '../../selectors';
import { sanitizeBook } from './helper';
import BookItem from '../../components/BookItem';
import BookDetail from '../../components/BookDetail';

import { Container } from './styles';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white'
    }
};

class BooksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startIndex: 1,
            modalIsOpen: false,
            selectedItem: null
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
    }

    handleFavoriteClicked({ item }) {
        const { onFavoriteClick } = this.props;
        console.log('I was clicked', { item });
        onFavoriteClick({ item });
    }

    render() {
        console.log(this.state);
        const { selectedItem } = this.state;
        const { books, totalItems } = this.props;
        console.log({ books, totalItems });
        return (
            <div style={{ backgroundColo: 'white' }}>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={() => this.setState({ modalIsOpen: false })}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <BookDetail
                        onClick={() => alert('I was clicked')}
                        key={Math.random()}
                        {...selectedItem}
                    />
                </Modal>
                <InfiniteScroll
                    dataLength={books.length}
                    next={this.fetchData}
                    hasMore
                    loader={<h4 style={{ alignSelf: 'center' }}>Loading...</h4>}
                >
                    <Container>
                        {books.map(e => (
                            <BookItem
                                onClick={() =>
                                    this.setState({ selectedItem: e, modalIsOpen: true })
                                }
                                onFavoriteClick={() => this.handleFavoriteClicked({ item: e })}
                                key={e.id}
                                {...e}
                            />
                        ))}
                    </Container>
                </InfiniteScroll>
            </div>
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
    onFetchFavorites: PropTypes.func.isRequired
};

BooksScreen.defaultProps = {
    books: { items: [] },
    totalItems: 0
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksScreen);
