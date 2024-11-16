import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import List from "../components/ui/List";
import Dropdown from "../components/ui/Dropdown";
import Footer from "../components/Footer";
import { useState } from "react";
import "../styles/Nav.scss";

export default function MainLayout() {
  const [open, setOpen] = useState();

  function openNav() {
    setOpen(!open);
  }
  return (
    <>
      <header className="navigation">
        <div className="nav__container">
          <Logo />
          <h2 className={`nav__desire`}>Desire</h2>
        </div>
        <nav className={`nav ${open ? "nav--open" : "nav--closed"}`}>
          <List />
        </nav>
        <Dropdown openNav={openNav} open={open} />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
