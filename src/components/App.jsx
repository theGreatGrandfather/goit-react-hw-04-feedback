import React, { Component } from 'react';

import Section from "./Section/Section";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    e.preventDefault();
    this.setState(prevState =>
      ({ [e.target.name]: prevState[e.target.name] + 1 })
    );
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const positivePercent = Math.round(this.state.good/ totalFeedback * 100)+'%' ;
    return positivePercent; 
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section
          title = 'Pleace leave feedback'
        >
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
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
  }
};

export default App