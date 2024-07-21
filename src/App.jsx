import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Hero />
      <Feature
        noteText="Display Your Profile"
        headerText="Customized Profile For Users to See"
        paragraphText="Users can display a customized profile that shows their role, permissions, and date joined! Unique user ID is included to avoid copycats :)"
      />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
