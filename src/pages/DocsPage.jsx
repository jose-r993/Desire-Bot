import React from "react";
import { Link } from "react-router-dom";
import "../styles/DocsPage.scss";

export default function DocsPage() {
  return (
    <div className="docs">
      <header className="docs__header">
        <h1>Welcome to Desire's User Documentation</h1>
        <p>
          Explore commands, features, and everything you need to get the most
          out of Desire. Whether you're a new user or a seasoned admin, we've
          got you covered.
        </p>
      </header>

      <section className="docs__quickLinks">
        <div className="docs__quickLinks__leftContainer">
          <h2>Quick Links</h2>
          <div className="docs__commands">
            <Link to="/docs/avatar" className="docs__command">
              <h3>/avatar</h3>
              <p>Fetch a user's avatar or your own.</p>
            </Link>
            <Link to="/docs/mute" className="docs__command">
              <h3>/mute</h3>
              <p>Mute a user in the server.</p>
            </Link>
            <Link to="/docs/kick" className="docs__command">
              <h3>/kick</h3>
              <p>Kick a disruptive user.</p>
            </Link>
            <Link to="/docs/server-info" className="docs__command">
              <h3>/serverinfo</h3>
              <p>Get detailed information about your server.</p>
            </Link>
          </div>
        </div>
        <div className="docs__quickLinks__rightContainer">
          <img src="src/assets/standing-icon.png" alt="Standing Helper Robot" />
        </div>
      </section>

      <section className="docs__overview">
        <h2>What You'll Find</h2>
        <ul>
          <li>
            <strong>Command Descriptions:</strong> Learn what each command does
            and how to use it effectively.
          </li>
          <li>
            <strong>Examples:</strong> See practical examples of commands in
            action.
          </li>
          <li>
            <strong>Permissions:</strong> Understand the roles required to
            execute specific commands.
          </li>
          <li>
            <strong>Best Practices:</strong> Tips to optimize your server's
            management.
          </li>
        </ul>
      </section>

      <footer className="docs__footer">
        <p>
          Need more help? Check out our{" "}
          <Link to="https://discord.gg/yT9MGjrtNG" target="_blank">
            support page
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
