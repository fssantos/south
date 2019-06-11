import styled from 'styled-components';

import media from '../../constants/media';

export const Container = styled.div`
    display: flex;
    height: 200px;
    background-color: ${props => props.theme.primaryBackgroundColor}
    flex: 4;
    ${media.phone`
    flex: 1;
 `}
`;
