import About from "../../components/About/About";
import Gear from "../../components/Gear/Gear";
import Goal from "../../components/Goal/Goal";
import Hero from "../../components/Hero/Hero";
import Offer from "../../components/Offer/Offer";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Container } from "../../components/layout";

function Home() {
  return (
    <div>
      <Hero />
      <Container>
        <About />
        <Offer />
        <Goal />
        <Testimonials />
        <Gear />
      </Container>
    </div>
  );
}

export default Home;
