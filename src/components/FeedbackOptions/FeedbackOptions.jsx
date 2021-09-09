import { Button } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

function FeedbackOptions(props) {
  const { eventHandler, name } = props;
  return (
    <>
      <Button id="good" type="button" onClick={eventHandler}>
        {name[0]}
      </Button>
      <Button id="neutral" type="button" onClick={eventHandler}>
        {name[1]}
      </Button>
      <Button id="bad" type="button" onClick={eventHandler}>
        {name[2]}
      </Button>
    </>
  );
}
FeedbackOptions.propTypes = {
  name: PropTypes.arrayOf(PropTypes.string).isRequired,
  eventHandler: PropTypes.func,
};

export default FeedbackOptions;
