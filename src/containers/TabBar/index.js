import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeBooksFilter } from '../../ducks';
import { getFilter } from '../../selectors';

import { Container } from './styles';
import SectionItem from '../../components/SectionItem';
import { sections } from '../../constants';

class TabBar extends React.Component {
    render() {
        const { onChangeBooksFilter } = this.props;
        return (
            <Container>
                {sections.map((e, i) => (
                    <SectionItem
                        key={i}
                        tag={e.tag}
                        Icon={e.Icon}
                        onClick={() => onChangeBooksFilter({ filter: e.query })}
                    />
                ))}
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

TabBar.propTypes = {
    onChangeBooksFilter: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabBar);
