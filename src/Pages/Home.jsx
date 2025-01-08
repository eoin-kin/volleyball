import { Container } from "react-bootstrap";
import { TopNav } from "../Components/TopNav";
import "./Home.css";
import { SocialIcon } from "react-social-icons";
import BottomBar from "../Components/BottomBar";
function Home() {
  console.log("Home component rendered");
  return (
    <>
      <TopNav />
      <Container fluid className="hero-cont">
        <img src="hero-section.png" />
      </Container>
      <div className="follow-us">
        <h1>Follow our journey</h1>
        <div className="contact-card">
          <SocialIcon url="whatsapp.com" bgColor="#a70150" />

          <SocialIcon url="instagram.com" bgColor="#a70150" />

          <SocialIcon url="youtube.com" bgColor="#a70150" />
        </div>
      </div>
      <Container fluid className="hero-cont">
        <img src="Raising the Level.jpg" />
      </Container>
      <BottomBar />
    </>
  );
}

export default Home;
