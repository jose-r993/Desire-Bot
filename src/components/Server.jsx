import { useInView } from "react-intersection-observer";
import "../styles/Server.scss";

export default function Server() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="server">
      <div
        className={`server__container ${inView && "server__container--pop-up"}`}
        ref={ref}
      >
        <div className="server__textContainer">
          <h2 className="server__header">Need Help?</h2>
          <p className="server__paragraph">
            Our Discord server is here for support, updates on new features, and
            more. Our team is here to assist you with any questions or issues
            you may have.
          </p>
          <button className="server__button">Join Server</button>
        </div>
        <img
          className="server__image"
          src="src/assets/mini.png"
          alt="Mini Desire Robot"
        />
      </div>
    </section>
  );
}
