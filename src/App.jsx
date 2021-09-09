import { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class App extends Component {
  state = INITIAL_STATE;

  keyNames = Object.keys(this.state);

  onLeaveFeedback = (e) => {
    const { id } = e.target;
    this.setState((state) => ({ [id]: state[id] + 1 }));
  };

  countTotal = (state) => {
    const { good, neutral, bad } = state;
    let result = good + neutral + bad;
    return result;
  };

  countPositivePercentage = (good, total) => {
    return Number(Math.round((good / total) * 100));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal(this.state);
    const positivePercentage = this.countPositivePercentage(good, total);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          name={this.keyNames}
          eventHandler={this.onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    );
  }
}

export default App;
