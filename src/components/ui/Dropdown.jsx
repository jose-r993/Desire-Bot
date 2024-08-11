import "../../styles/Dropdown.scss";

export default function Dropdown({ openNav, open }) {
  return (
    <div
      onClick={openNav}
      className={`dropdown ${open ? "dropdown-open" : "dopdown-closed"}`}
    ></div>
  );
}
