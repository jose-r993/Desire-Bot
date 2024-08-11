import { Link } from "react-router-dom";
import "./DocSideBar.scss";
import { useState } from "react";

function BreadCrumb({ commands, className }) {
  return (
    <>
      {commands.map((command) => (
        <Link
          className={`sideBar__link ${className}`}
          to={`.${command.path}`}
          key={command.id}
        >
          {command.command}
        </Link>
      ))}
    </>
  );
}

function CommandGroup({ groupName, commands }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={`sideBar__subgroupContainer ${isOpen ? "open" : "closed"}`}>
      <p className="sideBar__subgroupHeader" onClick={toggleOpen}>
        {groupName}
      </p>
      {isOpen && (
        <BreadCrumb className="sideBar__subgroupLink" commands={commands} />
      )}
    </div>
  );
}

export default function DocSideBar({ commandSection, className }) {
  return (
    <div className={`sideBar ${className}`}>
      {commandSection.map((commandCategory) => {
        const categoryName = commandCategory.categoryName;
        const allCommandGroups = commandCategory.commandGroups;

        return (
          <div className="sideBar__groupContainer" key={commandCategory.id}>
            <p className="sideBar__category">{categoryName}</p>
            {allCommandGroups.map((commandGroup) => (
              <CommandGroup
                key={commandGroup.id}
                groupName={commandGroup.groupName}
                commands={commandGroup.commands}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
