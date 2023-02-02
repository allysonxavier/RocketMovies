import { Container } from "./styles";
import { Score } from "../Score";

export function Note({ data, score, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Score score={score} />
    </Container>
  );
}
