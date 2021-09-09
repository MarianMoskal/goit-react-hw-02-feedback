import { Container, Paragraf } from "./Statistics.styled";
import PropTypes from "prop-types";

function Statistics(p) {
  const { good, neutral, bad, total, positivePercentage } = p;

  return (
    <Container>
      {total === 0 && <h3>No feedback given</h3>}

      {total > 0 && (
        <>
          <Paragraf>Good: {good}</Paragraf>
          <Paragraf>Neutral: {neutral}</Paragraf>
          <Paragraf>Bad: {bad}</Paragraf>
          <Paragraf>Total: {total}</Paragraf>
          <Paragraf>Positive feedback: {positivePercentage}%</Paragraf>
        </>
      )}
    </Container>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
