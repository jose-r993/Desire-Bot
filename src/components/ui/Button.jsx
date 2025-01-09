import { Link } from "react-router-dom";
import "../../styles/ui/Button.scss";

export default function Button({ className, text, linkSrc }) {
  return (
      <Link className={`button ${className}`} to={linkSrc}>{text}</Link>
      );
}
