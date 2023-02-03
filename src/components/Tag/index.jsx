import { Container } from "./styles";

export function Tag({ tags, ...rest }) {
  return (
    <Container {...rest}>
      <span>{tags}</span>
    </Container>
  );
}
