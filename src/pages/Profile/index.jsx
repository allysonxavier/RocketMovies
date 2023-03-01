import { Container, Avatar } from "./styles";
import { HiArrowLeft } from "react-icons/hi";
import { FiCamera } from "react-icons/fi";
export function Profile() {
  return (
    <Container>
      <header>
        <HiArrowLeft />
        <a>Voltar</a>
      </header>
      <Avatar>
        <img
          src="https://github.com/allysonxavier.png"
          alt="Foto de Perfil do Usuário"
        />
        <label htmlFor="avatar">
          <FiCamera />

          <input type="file" id="avatar" />
        </label>
      </Avatar>
    </Container>
  );
}
