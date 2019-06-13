import styled from 'styled-components';

import media from '../../constants/media';

export const Container = styled.div`
    display: flex;
    margin-top: 5px;
    padding-bottom: 50px;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ${props => props.theme.primaryBackgroundColor}
    flex: 4;
    ${media.phone`
    flex: 1;

 `}
`;
