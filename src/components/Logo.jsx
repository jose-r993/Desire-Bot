import { Link } from "react-router-dom";
import headIcon from "../assets/head-icon.png";
import "../styles/Logo.scss";

export default function Logo() {
  return (
    <Link to="/">
      <img className="logoImage" src={headIcon} alt="Desire robot logo" />{" "}
    </Link>
  );
}
