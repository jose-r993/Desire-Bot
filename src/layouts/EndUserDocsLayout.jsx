import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import List from "../components/ui/List";
import Dropdown from "../components/ui/Dropdown";
import Footer from "../components/Footer";
import commandsData from "../commands.json";
import DocSideBar from "../components/DocSideBar/DocSideBar";
import SearchBar from "../components/ui/SearchBar";
// import ScrollToTop from "../components/ScrollToTop";
import "../styles/EndUserDocsLayout.scss";

export default function UserDocumentation() {
  const [open, setOpen] = useState(false);
  const [headers, setHeaders] = useState([]);
  const location = useLocation();
  const commandSection = commandsData.userDocs;
  
  function openNav() {
    setOpen(!open);
  }

  const extractHeaders = () => {
    const descriptionElement = document.querySelector(".documentation__description");
  
    if (!descriptionElement) {
      setHeaders([]);
      return;
    }
  
    const headerElements = descriptionElement.querySelectorAll("h2, h3");
    const headersArray = Array.from(headerElements).map((header) => {
      if (!header.id) {
        const newID = header.textContent.replace(/\s+/g, "-").toLowerCase();
        header.setAttribute("id", newID);
      }

      return {
        id: header.id,
        text: header.textContent,
      };
    });
    setHeaders(headersArray);
  };

  useEffect(() => {
    extractHeaders();
  }, [location]);

  return (
    <div className="docs">
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
                {headers.map((header) => (
                  <a
                    key={header.id}
                    href={`#${header.id}`}
                    className="documentation__tocItem"
                  >
                    {header.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
      </main>

      <Footer />
    </div>
  );
}
