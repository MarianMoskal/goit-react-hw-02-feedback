import { Container } from "./Section.styled";

function Section(props) {
  const { title, children } = props;

  return (
    <Container>
      {title && <h1>{title}</h1>}
      {children}
    </Container>
  );
}

export default Section;
