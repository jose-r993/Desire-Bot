import { Link } from "react-router-dom";
import "../../styles/ButtonTwo.scss";

export default function ButtonTwo({ className, text, linkSrc }) {
  
  return (
    <Link className={`${className}`} to={linkSrc}>
      <button className={`buttonTwo ${className}`}>{text}</button>
    </Link>
    );
}
