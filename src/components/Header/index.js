import React from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
    Container,
    LogoIcon,
    SearchBarContainer,
    SearchBarIconContainer,
    SearchBarIcon,
    SearchBarInput,
    ProfileContainer,
    ProfileIcon
} from './styles';

class Header extends React.Component {
    render() {
        const { onChange, onClick } = this.props;
        return (
            <Container>
                <LogoIcon src="https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png" />

                <SearchBarContainer>
                    <SearchBarInput onChange={onChange} placeholder="Search" />
                    <SearchBarIconContainer onClick={onClick}>
                        <SearchBarIcon size={8} />
                    </SearchBarIconContainer>
                </SearchBarContainer>

                <ProfileContainer onClick={onClick}>
                    <ProfileIcon size={34} />
                </ProfileContainer>
            </Container>
        );
    }
}

Header.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};

export default withRouter(Header);
