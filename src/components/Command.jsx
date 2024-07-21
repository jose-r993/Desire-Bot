import Button from "./Button";
import ButtonTwo from "./ButtonTwo";
import "../styles/Command.scss";

export default function Command({
  noteText,
  headerText,
  paragraphText,
  reversed,
  imgSrc,
}) {
  return (
    <div className={`command ${reversed ? "command-reverse" : ""}`}>
      <div className="command__container">
        <p className="command__noteText">{noteText}</p>
        <h2 className="command__headerText">{headerText}</h2>
        <p className="command__paragraphText">{paragraphText}</p>
        <div className="command__buttonContainer">
          <Button text="Add To Discord" className="discord__button" />
          <ButtonTwo text="See Docs" className="docs__button" />
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
