import { Container, Image } from "react-bootstrap";
import { TopNav } from "../Components/TopNav";
import "./Home.css";
import { SocialIcon } from "react-social-icons";
import BottomBar from "../Components/BottomBar";
function Home() {
  return (
    <>
      <TopNav />

      <Image fluid src="/hero-section.webp" />

      <div className="follow-us">
        <h1>Follow our journey</h1>
        <br />
        <div className="contact-card">
          <SocialIcon url="whatsapp.com" bgColor="#a70150" />

          <SocialIcon url="instagram.com" bgColor="#a70150" />

          <SocialIcon url="youtube.com" bgColor="#a70150" />
        </div>
      </div>
      <Image fluid src="/Raising the Level.webp" />
      <BottomBar />
    </>
  );
}

export default Home;
