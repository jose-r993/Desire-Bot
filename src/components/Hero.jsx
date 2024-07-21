import Button from "./Button";
import ButtonTwo from "./ButtonTwo";
import balloon from "../assets/balloon.png";
import cloud from "../assets/cloud.png";
import "../styles/Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={balloon}
        alt="red & white hot air balloon"
        className="hero__balloon"
      />
      <img src={cloud} alt="white cloud" className="hero__cloud" />
      <h3 className="hero__subHeader">Get the Features You Desire</h3>
      <p className="hero__paragraph">
        Advanced Automation, Moderation Tools, and Custom Features to Enhance
        User Experience
      </p>
      <div className="hero__container">
        <ButtonTwo className="hero__discordButton" text="Explore Features" />
        <Button className="hero__featuresButton" text="Add To Discord" />
      </div>
    </section>
  );
}
