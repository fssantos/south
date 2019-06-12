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

const parseTitle = ({ title }) => (title.length > 17 ? title.substr(0, 17) : title);

class BookItem extends React.Component {
    render() {
        const { title, tumbImg, stars, author, price, oldPrice, onClick } = this.props;
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
                            starCount={stars}
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

BookItem.propTypes = {
    title: PropTypes.string.isRequired,
    tumbImg: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default withRouter(BookItem);
