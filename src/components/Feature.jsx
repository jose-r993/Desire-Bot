import Button from "./Button";
import command1 from "../assets/command1.png";
import "../styles/Feature.scss";

export default function Feature({
  noteText,
  headerText,
  paragraphText,
  buttonText,
}) {
  return (
    <div className="feature">
      <div className="feature__container">
        <p className="feature__noteText">{noteText}</p>
        <h2 className="feature__headerText">{headerText}</h2>
        <p className="feature__paragraphText">{paragraphText}</p>
        <Button text="Add To Discord" className="feature__button" />
        <Button text="See Docs" className="feature__button" />
      </div>
      <img
        src={command1}
        alt="User Information Profile"
        className="feature__image"
      />
    </div>
  );
}
