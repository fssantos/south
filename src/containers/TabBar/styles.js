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
    padding: 0px 20px 0px 20px;
    overflow: auto;
    white-space: nowrap;
    flex-direction: row;
    flex:1;
    ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
        height: 3px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, .5);
        -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
      }

 `}
`;
