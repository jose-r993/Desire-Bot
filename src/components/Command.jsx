import { useInView } from "react-intersection-observer";
import Button from "./ui/Button";
import ButtonTwo from "./ui/ButtonTwo";
import "../styles/Command.scss";

export default function Command({
  noteText,
  headerText,
  paragraphText,
  reversed,
  imgSrc,
  hideBtn,
  btnText,
}) {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div
      className={`command ${reversed ? "command--reverse" : ""} ${
        inView && "command--fade-in-command"
      }`}
      ref={ref}
    >
      <div className="command__container">
        <p className="command__noteText">{noteText}</p>
        <h2 className="command__headerText">{headerText}</h2>
        <p className="command__paragraphText">{paragraphText}</p>
        <div className="command__buttonContainer">
          <Button
            text="Add To Discord"
            className={`discord__button ${hideBtn && "discord__button-hidden"}`}
          />
          <ButtonTwo text={btnText} className="docs__button" />
        </div>
      </div>
      <img
        src={imgSrc}
        alt="User Information Profile"
        className="command__image"
      />
    </div>
  );
}
