import { Container } from "react-bootstrap";
import { TopNav } from "../Components/TopNav";
import "./Home.css";
function Home() {
  console.log("Home component rendered");
  return (
    <>
      <TopNav />
      <Container fluid className="hero-cont">
        <img src="hero-section.png" />
      </Container>
    </>
  );
}

export default Home;
