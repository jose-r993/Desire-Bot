import Logo from "./Logo";
import List from "./ui/List";
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo />
        <List className="footer__list" />
      </div>
    </footer>
  );
}
