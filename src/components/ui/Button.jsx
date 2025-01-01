import { Link } from "react-router-dom";
import "../../styles/ui/Button.scss";

export default function Button({ className, text, linkSrc }) {
  return (
      <Link className={`${className}`} to={linkSrc}>
        <button className={`button ${className}`}>{text}</button>
      </Link>
      );
}
