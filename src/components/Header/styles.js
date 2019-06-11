import styled from 'styled-components';

import { Search } from 'styled-icons/boxicons-regular/Search';
import { UserCircle } from 'styled-icons/boxicons-solid/UserCircle';

import media from '../../constants/media';

export const Container = styled.div`
    display: flex;
    flex: 1;
    padding: 0px 30px;

    align-items: center;
    height: 70px;
    background-color: ${props => props.theme.primaryBackgroundColor};
`;

export const LogoIcon = styled.img`
    width: 183px;
    height: 39px;
    margin-right: 30px;
    ${media.phone`
    display: none;
 `}
`;

export const SearchBarContainer = styled.div`
    display: flex;
    height: 100%;
    flex: 6;
    background-color: ${props => props.theme.primaryBackgroundColor};
    align-items: center;
    border-radius: 4px;
`;

export const SearchBarInput = styled.input`
    diplay: flex;
    flex: 7;
    height: 30px;
    padding: 0px;
    border-width: 0px;
    color: white;
    background-color: white;
    margin: 0
    ::placeholder,
    ::-webkit-input-placeholder {
        font-size: 16px;
        color: ${props => props.theme.primaryFontColor};
        padding: 0px 8px;
    }
    :-ms-input-placeholder {
        font-size: 16px;
        color: ${props => props.theme.primaryFontColor};
        padding: 0px 8px;
    }
`;

export const SearchBarIconContainer = styled(Search)`
    display: flex;
    width: 50px;
    height: 30px;
    align-items: center;
    justify-content: center;
    margin: 0px;
    color: white;
    background: -webkit-linear-gradient(top, #4387fd, #4683ea);
`;

export const SearchBarIcon = styled(Search)`
    width: 12px;
    height: 12px;
    margin: 0px;
    color: white;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex: 5;
    justify-content: flex-end;
    font-size: 1.4em;
    width: 1.6em;
    text-align: center;
    line-height: 1.6em;
    color: white;
    border-radius: 0.8em;

    ${media.phone`
    display: none;
 `}
`;

export const ProfileIcon = styled(UserCircle)`
    color: white;
`;
