import { Container } from "./Section.styled";
import PropTypes from "prop-types";

function Section(props) {
  const { title, children } = props;

  return (
    <Container>
      {title && <h1>{title}</h1>}
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
