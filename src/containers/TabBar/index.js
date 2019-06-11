import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container } from './styles';
import SectionItem from '../../components/SectionItem';
import { sections } from '../../constants';

class TabBar extends React.Component {
    render() {
        return (
            <Container>
                {sections.map((e, i) => (
                    <SectionItem key={i} tag={e.tag} Icon={e.Icon} onClick={() => alert(e.query)} />
                ))}
            </Container>
        );
    }
}

export default withRouter(TabBar);
