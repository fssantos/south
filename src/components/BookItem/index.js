import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

import {
    Container,
    TitleText,
    TumbImg,
    TitleAndAuthorWrapper,
    InfosWrapper,
    AuthorText,
    StarAndPriceWrapper,
    PriceWrapper,
    PriceText,
    OldPriceText
} from './styles';

class BookItem extends React.Component {
    render() {
        const { title, tumbImg, stars, author, price, oldPrice } = this.props;
        return (
            <Container onClick={() => onClick('book clicked')}>
                <TumbImg src={tumbImg} />
                <InfosWrapper>
                    <TitleAndAuthorWrapper>
                        <TitleText>{parseTitle({ title })}</TitleText>
                        <AuthorText>{author}</AuthorText>
                    </TitleAndAuthorWrapper>

                    <StarAndPriceWrapper>
                        <StarRatingComponent
                            name="rate2"
                            startColor="#616161"
                            emptyStarColor="#F7F7F7"
                            editing={false}
                            starCount={5}
                            value={4}
                        />
                        <PriceWrapper>
                            <OldPriceText>{oldPrice}</OldPriceText>
                            <PriceText>{price}</PriceText>
                        </PriceWrapper>
                    </StarAndPriceWrapper>
                </InfosWrapper>
            </Container>
        );
    }
}

const parseTitle = ({ title }) => (title.length > 17 ? title.substr(0, 17) : title);

BookItem.propTypes = {
    title: PropTypes.string.isRequired,
    tumbImg: PropTypes.string,
    stars: PropTypes.number,
    author: PropTypes.string,
    price: PropTypes.string,
    oldPrice: PropTypes.string
};

export default withRouter(BookItem);
