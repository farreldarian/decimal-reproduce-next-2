import Container from "./Container";
import Forms from "./Forms";
import FormsContainer from "./FormsContainer";
import Header from "./Header";
import Timer from "./Timer";

export default function Home() {
  return (
    <Container>
      <Header />
      <FormsContainer>
        <Timer />
        <Forms />
      </FormsContainer>
    </Container>
  );
}
