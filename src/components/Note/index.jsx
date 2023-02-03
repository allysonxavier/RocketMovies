import { Container } from "./styles";
import { Score } from "../Score";
import { Tag } from "../../components/Tag";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Score score={data.score} />
      <p>{data.content}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.name} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
