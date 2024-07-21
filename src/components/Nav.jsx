import { useState } from "react";
import headIcon from "../assets/head-icon.png";
import Button from "./Button";
import Dropdown from "./Dropdown";
import "../styles/Nav.scss";

export default function Nav() {
  const [open, setOpen] = useState();

  function openNav() {
    setOpen(!open);
  }

  return (
    <>
      <div className="nav__container">
        <img className="nav__logo" src={headIcon} alt="Desire robot logo" />
        <h2 className="nav__desire">Desire</h2>
      </div>
      <nav className={`nav ${open ? "nav--open" : "nav--closed"}`}>
        <span className="nav__span"></span>
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__links" href="#features">
              Features
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__links" href="#docs">
              Docs
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__links" href="#guide">
              Guide
            </a>
          </li>
        </ul>
        <Button
          className={`nav__button ${
            open ? "nav__button--open" : "nav__button--closed"
          }`}
          text="Add Bot"
        />
      </nav>
      <Dropdown openNav={openNav} open={open} />
    </>
  );
}
