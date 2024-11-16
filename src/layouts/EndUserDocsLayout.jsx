import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import List from "../components/ui/List";
import Dropdown from "../components/ui/Dropdown";
import Footer from "../components/Footer";
import commandsData from "../commands.json";
import DocSideBar from "../components/DocSideBar/DocSideBar";
import SearchBar from "../components/ui/SearchBar";
import "../styles/EndUserDocsLayout.scss";

export default function UserDocumentation() {
  const [open, setOpen] = useState();
  const headersArr = useContext([]);
  const commandSection = commandsData.userDocs;

  function openNav() {
    setOpen(!open);
  }

  return (
    <>
      <header className="documentation__stickyContainer">
        <div className="documentation__logoNameContainer">
          <Logo />
          <h2 className={`nav__desire documentation__navigationBar`}>Desire</h2>
        </div>
        <nav
          className={`documentation__navList ${
            open ? "nav--open" : "nav--closed"
          }`}
        >
          <List />
        </nav>
        <Dropdown openNav={openNav} open={open} />
        <SearchBar className="documentation__searchBar" />
      </header>

      <main className="documentation">
        <DocSideBar
          commandSection={commandSection}
          className="documentation__sideBar"
        />
        <div className="documentation__descriptionContainer">
          <div className="documentation__description">
            <Outlet />
          </div>
          <div className="documentation__tocContainer">
            <div className="documentation__tocEntries">
              <p>On This Page</p>
              <p>Descritpion</p>
              <p>Usage</p>
              <p>Parameters</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
