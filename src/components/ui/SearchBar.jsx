import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import SearchIcon from "../../assets/searchIcon.svg";
import docsContentList from "../../../public/documentationContent.json"
import "../../styles/ui/SearchBar.scss";


export default function SearchBar({ className }) {
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const options = {
    ignoreLocation: true,
    includeMatches: true,
    ignoreFieldNorm: true,
    minMatchCharLength: 3,
    keys: [ 
      "description", 
      "title",
      "usage", 
      "parameters", 
      "requiredPermissions",
    ]
  };
  const fuse = new Fuse(docsContentList, options);
  
  useEffect(() => {
    const findText = setTimeout(() => {
      setSearchList(fuse.search(searchText, {limit: 3}));
    }, 400)

    return () => clearTimeout(findText)

  }, [searchText])

  useEffect (() => {
    const selectSearchBox = (Event) => {
      const searchInput = document.querySelector(".searchBar__input");
      if (Event.key == "/" && document.activeElement !== searchInput) {
        Event.preventDefault();
        searchInput.focus();
      } else if (Event.key == "Escape") {
        searchInput.blur();
      }
    }
    document.addEventListener("keydown", selectSearchBox);

    return () => { 
      document.removeEventListener("keydown", selectSearchBox);
    };

  }, []);

  return (
    <div className={`searchBar ${className}`}>
      <img src={SearchIcon} alt="Search Icon" className="searchBar__icon" />
      <input
      type="search"
      aria-label="search documentation"
      className="searchBar__input"
      placeholder="Search Documentation"
      onChange={(e) => setSearchText(e.target.value)}
      />
      <kbd className="searchBar__kbd">/</kbd>
      
      {searchList.length > 0 && (
        <>
          <div className="searchBar__suggested">Suggested</div>
          <div className="searchBar__resultBox">
          {searchList.map((result, index) => {
            const link = result.item.url;
            const location = result.matches[0].key;
            const leftIndex = result.matches[0].indices[0][0];
            const rightIndex = result.matches[0].indices[0][1] + 1;
            const slicedString = result.item[location].substring(leftIndex - 10, rightIndex + 10).trim();

            return (
              <Link key={index} className="searchBar__resultBox__item" to={link}>
                <img src={SearchIcon} alt="Result Icon" className="searchBar__resultBox__item__icon" />
                <span>{slicedString}</span>
              </Link>
            )
          })}
          </div>
        </>
      )}
    </div>
  );
}
