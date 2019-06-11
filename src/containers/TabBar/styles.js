import styled from 'styled-components';

import media from '../../constants/media';

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 200px;
    background-color: ${props => props.theme.primaryBackgroundColor}
    flex-direction: column;
    padding: 20px;
    ${media.phone`
    overflow: auto;
    white-space: nowrap;
    flex-direction: row;
    flex:1;

 `}
`;
