import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import List from "../components/ui/List";
import Dropdown from "../components/ui/Dropdown";
import Footer from "../components/Footer";
import commandsData from "../commands.json";
import DocSideBar from "../components/DocSideBar/DocSideBar";
import SearchBar from "../components/ui/SearchBar";
import "../styles/EndUserDocsLayout.scss";
import Fuse from "fuse.js";
import docsContentList from "../../public/documentationContent.json"




export default function UserDocumentation() {
  const [open, setOpen] = useState(false);
  const [headers, setHeaders] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [activeHeader, setActiveHeader] = useState("");
  const commandSection = commandsData.userDocs;
  const options = {
    minMatchCharLength: 3,
    includeScore: true,
    includeMatches: true,
    ignoreFieldNorm: true,
    threshold: 0.7,
    keys: [ 
      "title",
      "description", 
      "usage", 
      "parameters", 
      "requiredPermissions", 
      "url" 
    ]
  };
  const fuse = new Fuse(docsContentList, options);
  
  function openNav() {
    setOpen(!open);
  }

  const extractHeaders = () => {
    const descriptionElement = document.querySelector(".documentation__description");
  
    if (!descriptionElement) {
      console.warn("Description element not found. Skipping header extraction.");
      setHeaders([]);
      return;
    }
  
    const headerMain = descriptionElement.querySelector("h1");
    if (!headerMain) {
      console.warn("Main header (h1) not found.");
      setHeaders([]);
      return;
    }
  
    const headerText = headerMain.textContent
      .replace(/ /g, "-")
      .replace("/", "")
      .replace(/[\[\]]/g, "");
  
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
    const findText = setTimeout(() => {
      const tempList = fuse.search(searchText, {limit: 3})
      tempList.forEach((result) => {
        const location = result.matches[0].key;
        const leftIndex = result.matches[0].indices[0][0];
        const rightIndex = result.matches[0].indices[0][1] + 1;
        const slicedString = result.item[location].substring(leftIndex, rightIndex);
        console.log(slicedString);
      })
      console.log(tempList);
    }, 400)

    return () => clearTimeout(findText)

  }, [searchText])


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
        <SearchBar className="documentation__searchBar" onChange={(e) => setSearchText(e.target.value)} />
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
                  className={`documentation__tocItem ${
                    activeHeader === header.id ? "active" : ""
                  }`}
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
