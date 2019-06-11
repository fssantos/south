import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-right: 45px;
    cursor: default;
    background-color: ${props=>props.theme.primaryBackgroundColor}
`;

export const TabDescription = styled.p`
    color: ${props=>props.theme.primaryFontColor};
    cursor: default;
    margin-left: 5px;
`;
