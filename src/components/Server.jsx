import Button from "./ui/Button";
import "../styles/Server.scss";

export default function Server() {
  return (
    <section className="server">
      <div className="server__container">
        <h2 className="server__header">Need Help?</h2>
        <p className="server__paragraph">
          Our Discord server is here for support, updates on new features, and
          more. Our team is here to assist you with any questions or issues you
          may have.
        </p>
        <button className="server__button">Join Server</button>
      </div>
    </section>
  );
}