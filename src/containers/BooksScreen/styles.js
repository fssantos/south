import styled from 'styled-components';

import media from '../../constants/media';

export const Container = styled.div`
    display: flex;
    margin-top: 10px;
    padding-bottom: 50px;
    flex-wrap: wrap;
    background-color: ${props => props.theme.primaryBackgroundColor}
    flex: 4;
    ${media.phone`
    flex: 1;
 `}
`;
