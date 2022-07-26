import styled from "styled-components";
import Benefit from "./Components/Benefit";
import Footer from "./Components/Footer";
import GetStarted from "./Components/GetStarted";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Status from "./Components/Status";

export default function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Status />
      <Benefit />
      <GetStarted />
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`;
