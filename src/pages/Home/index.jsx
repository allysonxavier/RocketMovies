import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Header></Header>
      <main>
        <h1>RocketMovies</h1>
        <a>
          <FiPlus />
          {/* Acima depois inserir <Link> */}
          <Button
            type="button"
            title="Adicionar filme"
            className={"button-add"}
          ></Button>
        </a>
        <Note data={{ title: "React" }} score={4} />
      </main>
    </Container>
  );
}
