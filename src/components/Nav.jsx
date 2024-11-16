import { useState } from "react";
import Button from "./ui/Button";
import List from "./ui/List";
import Dropdown from "./ui/Dropdown";
import Logo from "./Logo";
import "../styles/Nav.scss";

export default function Nav({ className }) {
  const [open, setOpen] = useState();

  function openNav() {
    setOpen(!open);
  }

  return (
    <section className="navigation">
      <div className="nav__container">
        <Logo />
        <h2 className={`nav__desire ${className}`}>Desire</h2>
      </div>
      <nav className={`nav ${open ? "nav--open" : "nav--closed"}`}>
        <List />
      </nav>
      <Dropdown openNav={openNav} open={open} />
    </section>
  );
}
