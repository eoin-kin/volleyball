import { Container, Image } from "react-bootstrap";
import { TopNav } from "../Components/TopNav";
import "./Home.css";
import { SocialIcon } from "react-social-icons";
import BottomBar from "../Components/BottomBar";
function Home() {
  return (
    <>
      <TopNav />

      <Image fluid src="/hero-section.webp" loading="lazy" />

      <div className="follow-us">
        <h1>Follow our journey</h1>
        <br />
        <div className="contact-card">
          <SocialIcon
            url="whatsapp.com"
            href="https://chat.whatsapp.com/IaJoPLVZDcNF56Qb9WZxvM"
            bgColor="#a70150"
          />

          <SocialIcon
            url="instagram.com"
            href="https://www.instagram.com/unigalwayvolleyball/"
            bgColor="#a70150"
          />

          <SocialIcon
            url="youtube.com"
            href="https://www.youtube.com/@UniversityofGalwayVolleyball"
            bgColor="#a70150"
          />
        </div>
      </div>

      <Image fluid src="/Raising the Level.webp" loading="lazy" />
      <BottomBar />
    </>
  );
}

export default Home;
