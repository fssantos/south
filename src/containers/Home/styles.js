import styled from 'styled-components';

import media from '../../constants/media';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    ${media.phone`
    flex-direction: column;
 `}
`;
