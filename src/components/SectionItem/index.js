import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Container, TabDescription } from './styles';

class SectionItem extends React.Component {
    render() {
        console.log(this.props);
        const { onClick, tag, Icon } = this.props;
        return (
            <Container onClick={() => onClick(tag)}>
                {Icon}
                <TabDescription>{tag}</TabDescription>
            </Container>
        );
    }
}

SectionItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    tag: PropTypes.string.isRequired,
    Icon: PropTypes.object.isRequired
};

export default withRouter(SectionItem);
