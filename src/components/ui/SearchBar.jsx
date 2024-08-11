import SearchIcon from "../../assets/searchIcon.svg";
import "../../styles/ui/SearchBar.scss";

export default function SearchBar({ className }) {
  return (
    <div className={`searchBar ${className}`}>
      <img src={SearchIcon} alt="Search Icon" className="searchBar__image" />
      <input
        type="search"
        aria-label="search documentation"
        className="searchBar__input"
        placeholder="Search Documentation"
      />
      <kbd className="searchBar__kbd">/</kbd>
    </div>
  );
}
