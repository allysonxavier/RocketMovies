import { Container } from "./styles";
import { Score } from "../Score";
import { Tag } from "../../components/Tag";

export function Note({ data, tags, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Score score={data.score} />
      <p>{data.content}</p>
      <ul>
        <Tag tags={tags}></Tag>
      </ul>
    </Container>
  );
}
