import styled from 'styled-components';
import { FavoriteBorder } from 'styled-icons/material/FavoriteBorder';
import { Heart } from 'styled-icons/boxicons-solid/Heart';

import media from '../../constants/media';

const fontColor = 'rgba(97, 97, 97, 0.9)';
const fontSize = '16px';
const fontFamily = '"Roboto",Arial,sans-serif';
const lineHeight = '16px';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FavoriteIconEnabled = styled(Heart)`
    color: #01579b;
    margin: 0px;
    padding: 0px;
    align-self: flex-end;
`;

export const FavoriteIconDisabled = styled(FavoriteBorder)`
    color: #01579b;
    margin: 0px;
    padding: 0px;
    align-self: flex-end;
`;

export const DetailsContainer = styled.div`
    display: flex;
    margin-top: 30px;
    margin-right: 45px;
    cursor: default;
    background-color: white !important;
    flex-direction: row;
    background-color: ${props => props.theme.primaryBackgroundColor}
    -webkit-box-shadow: 2px 2px 5px 0px rgba(238, 238, 238, 0.3);
    -moz-box-shadow: 2px 2px 5px 0px rgba(238, 238, 238, 0.3);
    box-shadow: 2px 2px 5px 0px rgba(238, 238, 238, 0.3);

    ${media.phone`
    flex: 1;
    margin-right: 0px;
    padding-left: 12px;
    padding-right: 12px;
    margin-top: 10px;
 `}
`;

export const TumbImg = styled.img`
    background-color: white
    padding: 0px 3px 0px 3px
    display: flex;
    flex: 1;
    max-height: 200px;

    ${media.phone`
    margin-top: 15px;
 `}
`;

export const InfosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 8px 4px 8px;
    background-color: white;
`;

export const TitleAndAuthorWrapper = styled.div`
    flex-direction: column;
    margin-bottom: 15px;
`;

export const TitleText = styled.p`
    font-size: ${fontSize};
    font-family: ${fontFamily};
    line-height: ${lineHeight};
    color: ${fontColor};
    cursor: default;
    margin-bottom: 3px;
`;

export const AuthorText = styled.p`
    font-size: 14px;
    font-family: ${fontFamily};
    color: ${fontColor};
    line-height: ${lineHeight};
    cursor: default;
    margin: 0px;
`;

export const StarAndPriceWrapper = styled.div`
    align-items: flex-end;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
`;

export const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-around;
`;

export const PriceText = styled.p`
    font-size: 12px;
    font-family: ${fontFamily};
    color: ${props => props.theme.secondaryFontColor};
    line-height: ${lineHeight};
    cursor: default;
    margin: 0px;
    padding: 0px;
`;

export const OldPriceText = styled.p`
    font-size: 12px;
    font-family: ${fontFamily};
    color: rgba(200, 200, 200, 0.7);
    line-height: ${lineHeight};
    cursor: default;
    margin: 0px;
    padding: 0px;
    text-decoration: line-through;
`;

export const DetailInfoWrapper = styled.div`
    margin-top: 20px;
    flex-direction: column;
    max-width: 500px;
`;

export const DescriptionText = styled.p`
    font-size: 12px;
    font-family: ${fontFamily};
    color: ${fontColor};
    line-height: ${lineHeight};
    cursor: default;
    margin: 0px;
    margin-bottom: 10px;
`;

export const BuyButton = styled.div`
    display: flex;
    width: 200px;
    height: 30px;
    background-color: ${props => props.theme.primaryButtonColor};
    text-align: center;
    justify-content: center;
    align-items: center;
    color: white;
`;
