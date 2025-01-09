import { Link } from "react-router-dom";
import "../../styles/ButtonTwo.scss";

export default function ButtonTwo({ className, text, linkSrc }) {
  
  return (
    <Link className={`buttonTwo ${className}`} to={linkSrc}>{text}</Link>
    );
}
