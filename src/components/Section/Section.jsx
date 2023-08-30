import React from 'react';
import PropTypes from 'prop-types';

import { MainSection, Container, Title } from './Section.styled';

const Section = ({ children, title }) => {
    return (
        <MainSection>
            <Container>
                <Title>
                    {title}
                </Title>
                    {children}
            </Container>
        </MainSection>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default Section