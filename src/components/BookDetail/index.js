import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

import {
    Container,
    DetailsContainer,
    TitleText,
    TumbImg,
    TitleAndAuthorWrapper,
    InfosWrapper,
    AuthorText,
    StarAndPriceWrapper,
    PriceWrapper,
    PriceText,
    OldPriceText,
    DetailInfoWrapper,
    DescriptionText,
    BuyButton,
    FavoriteIconDisabled,
    FavoriteIconEnabled
} from './styles';

const parseText = ({ text }) => (text.length > 300 ? `${text.substr(0, 300)}...` : text);

class BookDetail extends React.Component {
    render() {
        const {
            title,
            tumbImg,
            stars,
            author,
            description,
            price,
            oldPrice,
            onClick,
            buyLink,
            isFavorite,
            onFavoriteClick
        } = this.props;
        return (
            <Container>
                {isFavorite ? (
                    <FavoriteIconEnabled size={22} onClick={onFavoriteClick} />
                ) : (
                    <FavoriteIconDisabled size={22} onClick={onFavoriteClick} />
                )}
                <DetailsContainer onClick={onClick}>
                    <TumbImg src={tumbImg} />
                    <InfosWrapper>
                        <TitleAndAuthorWrapper>
                            <TitleText>{title}</TitleText>
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
                        <DetailInfoWrapper>
                            {description && (
                                <DescriptionText>{`Descrição: ${parseText({
                                    text: description
                                })}`}</DescriptionText>
                            )}
                            {buyLink && (
                                <BuyButton
                                    onClick={() => {
                                        window.open(buyLink, '_blank');
                                    }}
                                >
                                    COMPRAR
                                </BuyButton>
                            )}
                        </DetailInfoWrapper>
                    </InfosWrapper>
                </DetailsContainer>
            </Container>
        );
    }
}

BookDetail.propTypes = {
    title: PropTypes.string.isRequired,
    tumbImg: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buyLink: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    onFavoriteClick: PropTypes.func.isRequired
};

export default withRouter(BookDetail);
