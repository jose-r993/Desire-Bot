import { Link } from "react-router-dom";
import "../../styles/List.scss";

export default function List({ className }) {
  return (
    <ul className={`list ${className}`}>
      <li className="list__item">
        <Link className="list__links" to="/guide">
          Guide
        </Link>
      </li>
      <li className="list__item">
        <Link className="list__links" to="/docs">
          Docs
        </Link>
      </li>
      <li className="list__item">
        <Link
          className="list__links"
          to="https://discord.gg/yT9MGjrtNG"
          target="_blank"
        >
          Support
        </Link>
      </li>
    </ul>
  );
}
