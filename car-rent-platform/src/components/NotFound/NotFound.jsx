import errorImage from "../../assets/images/404.jpg";
import { Container, NotInlist, NoCar } from "./NotFound.styled";

export const NotFound = () => {
  return (
    <Container>
      <NoCar src={errorImage} alt="Nothing in List" />
      <NotInlist>Nothing in List</NotInlist>
    </Container>
  );
};
