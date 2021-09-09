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
    const { className } = e.target;

    if (className.includes("goodBtn")) {
      this.setState((state) => ({ good: state.good + 1 }));
    }
    if (className.includes("neutralBtn")) {
      this.setState((state) => ({ neutral: state.neutral + 1 }));
    }
    if (className.includes("badBtn")) {
      this.setState((state) => ({ bad: state.bad + 1 }));
    }
  };

  render() {
    const { state, keyNames, onLeaveFeedback } = this;
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    const positivePercentage = Number(Math.round((good / total) * 100));

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions name={keyNames} eventHandler={onLeaveFeedback} />
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
