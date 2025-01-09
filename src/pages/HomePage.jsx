import { useInView } from "react-intersection-observer";
import Feature from "../components/Feature";
import Server from "../components/Server";
import Button from "../components/ui/Button";
import ButtonTwo from "../components/ui/ButtonTwo";
import balloon from "../assets/balloon.png";
import cloud from "../assets/cloud.png";
import "../styles/HomePage.scss";

export default function HomePage() {
 

  return (
    <main>
      <Button className="homeBtn" text="Add Bot" />
      <section className="hero">
        <img
          src={balloon}
          alt="red & white hot air balloon"
          className="hero__balloon"
        />
        <img src={cloud} alt="white cloud" className="hero__cloud" />
        <h3 className="hero__header">Get the Features You Desire</h3>
        <p className="hero__paragraph">
          Advanced Automation, Moderation Tools, and Custom Features to Enhance
          User Experience
        </p>
        <div className="hero__button-container">
          <ButtonTwo className="hero__discordButton" text="Explore Features" linkSrc="/features"/>
          <Button className="hero__featuresButton" text="Add To Discord" />
        </div>
      </section>
      <Feature />
      <Server />
    </main>
  );
}
