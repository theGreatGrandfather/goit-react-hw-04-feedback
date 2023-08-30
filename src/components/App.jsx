import React, { useState } from 'react';

import Section from "./Section/Section";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = ()=> {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = (key) => {
    switch (key) {
      case "good":
        setGood(prevState => prevState +1)
        break;
      case "neutral":
        setNeutral(prevState => prevState +1)
        break;
      case "bad":
        setBad(prevState => prevState +1)
        break;
      
      default:
        break;
    }
    countTotalFeedback();
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const positivePercent = Math.round(good/ totalFeedback * 100)+'%' ;
    return positivePercent; 
  };
 
    const total = countTotalFeedback();
    const positivePercent = countPositiveFeedbackPercentage();
  return (
    
      <>
        <Section
          title = 'Pleace leave feedback'
        >
          <FeedbackOptions
            options={['good','neutral','bad']  }
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section
          title = 'Statistics'
        >
          {total ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercent}
          /> :
            <Notification message="There is no feedback" />}
        </Section>
      </>
    
  )
};

export default App