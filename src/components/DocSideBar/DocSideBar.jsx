import { Link } from "react-router-dom";
import "./DocSideBar.scss";

function createEntry(entry) {
  return (
    <Link className="sideBar__link" to={`.${entry.path}`} key={entry.id}>
      {entry.command}
    </Link>
  );
}

export default function DocSideBar({ commandSection, className }) {
  return (
    <div className={`sideBar ${className}`}>
      {commandSection.map((commandCategory) => {
        const categoryName = commandCategory.categoryName;
        const commandArray = commandCategory.commands;

        return (
          <div className="sideBar__groupContainer" key={commandCategory.id}>
            <p className="sideBar__header">{categoryName}</p>
            <div className="sideBar__commandContainer">
              {commandArray.map(createEntry)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
