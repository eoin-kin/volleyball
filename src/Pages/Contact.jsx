import React from "react";
import { TopNav } from "../Components/TopNav";
import { SocialIcon } from "react-social-icons";
import "./Contact.css";
import { Image } from "react-bootstrap";
import BottomBar from "../Components/BottomBar";

function Contact() {
  return (
    <>
      <TopNav />
      <Image fluid src="Contact.webp" />
      <div className="follow-socials">
        <h1>Follow our Socials</h1>
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
      <BottomBar />
    </>
  );
}

export default Contact;
