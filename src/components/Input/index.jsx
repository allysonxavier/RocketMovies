import { Container } from "./styles";

export function Input({ title }) {
  return (
    <Container>
      <input placeholder={title} title={title} />
    </Container>
  );
}
