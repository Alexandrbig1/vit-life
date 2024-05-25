import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Offer from "../../components/Offer/Offer";
import { Container } from "../../components/layout";

function Home() {
  return (
    <div>
      <Hero />
      <Container>
        <About />
        <Offer />
      </Container>
    </div>
  );
}

export default Home;
