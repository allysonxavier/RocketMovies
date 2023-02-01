import { Container, Profile, Line } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <>
      <Container>
        <h1>RocketMovies</h1>
        <Input />
        <Profile>
          <div>
            <strong>Allyson Xavier</strong>
            <a>sair</a>
          </div>
          <a>
            <img
              src="https://github.com/allysonxavier.png"
              alt="Foto de Perfil do Usuário"
            />
          </a>
        </Profile>
      </Container>
      <Line />
    </>
  );
}
