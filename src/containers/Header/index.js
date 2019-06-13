import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeBooksFilter } from '../../ducks';
import { getFilter } from '../../selectors';

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

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };
    }
    render() {
        const { searchText } = this.state;
        console.log(searchText);
        const { onChangeBooksFilter } = this.props;
        return (
            <Container>
                <LogoIcon src="https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png" />

                <SearchBarContainer>
                    <SearchBarInput
                        value={searchText}
                        onChange={e => {
                            this.setState({ searchText: e.target.value });
                            onChangeBooksFilter({ filter: e.target.value });
                        }}
                        placeholder="Search"
                    />
                    <SearchBarIconContainer
                        onClick={() => onChangeBooksFilter({ filter: 'favorites' })}
                    >
                        <SearchBarIcon size={8} />
                    </SearchBarIconContainer>
                </SearchBarContainer>

                <ProfileContainer onClick={() => alert('Just a placeholder :)')}>
                    <ProfileIcon size={34} />
                </ProfileContainer>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        filter: getFilter(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeBooksFilter: ({ filter }) => dispatch(changeBooksFilter({ filter }))
    };
}

Header.propTypes = {
    onChangeBooksFilter: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
