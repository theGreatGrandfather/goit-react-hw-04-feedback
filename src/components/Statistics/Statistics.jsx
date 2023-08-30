import React from 'react';
import PropTypes from 'prop-types';

import {Paragraph} from './Statistics.styled';

function Statistics({good, neutral, bad, total, positivePercentage}) {
    const data = [
        { statItem: good, title: 'Good' },
        { statItem: neutral, title: 'Neutral' },
        { statItem: bad, title: 'Bad' },
        { statItem: total, title: 'Total feedbacks' },
        { statItem: positivePercentage, title: 'Positive feedbacks' },
    ];
    
    return (
    <>
        {data.map(({statItem, title } )=>
            <Paragraph key={title}>
                {title}{ ': '}{statItem}
            </Paragraph>
        )}
    </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string,
}

export default Statistics
