import { Button } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

function FeedbackOptions(props) {
  const { eventHandler, name } = props;
  return (
    <>
      <Button type="button" className="goodBtn" onClick={eventHandler}>
        {name[0]}
      </Button>
      <Button type="button" className="neutralBtn" onClick={eventHandler}>
        {name[1]}
      </Button>
      <Button type="button" className="badBtn" onClick={eventHandler}>
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
