import "../app/globals.css";

import Forms from "@/app/Forms";
import Timer from "@/app/Timer";
import Link from "next/link";
import Header from "@/app/Header";
import FormsContainer from "@/app/FormsContainer";
import Container from "@/app/Container";

export default function client() {
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
