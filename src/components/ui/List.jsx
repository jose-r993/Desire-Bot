import { Link } from "react-router-dom";
import "../../styles/List.scss";

export default function List({ className }) {
  return (
    <ul className={`list ${className}`}>
      <li className="list__item">
        <Link className="list__links" to="/features">
          Features
        </Link>
      </li>
      <li className="list__item">
        <Link className="list__links" to="/docs">
          Docs
        </Link>
      </li>
      <li className="list__item">
        <Link className="list__links" to="/guide">
          Guide
        </Link>
      </li>
    </ul>
  );
}
