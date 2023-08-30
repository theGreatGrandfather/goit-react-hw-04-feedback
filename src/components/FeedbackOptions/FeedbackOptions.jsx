import React from 'react';
import PropTypes from 'prop-types';

import { FeedBackContainer, FeedBackBtn } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <FeedBackContainer>
            {options.map(option =>
                <FeedBackBtn
                    key={option}
                    name={option}
                    type="button"
                    onClick={() => onLeaveFeedback( option)}
                >
                    {option}
                </FeedBackBtn>)}
        </FeedBackContainer>
    )
}

FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions
