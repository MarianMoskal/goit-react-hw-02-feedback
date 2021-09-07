import { Button } from "./FeedbackOptions.styled";

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

export default FeedbackOptions;
