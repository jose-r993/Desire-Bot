import Command from "./Command";
import command1 from "../assets/command1.png";
import command2 from "../assets/command2.png";
import command3 from "../assets/command3.png";
import command4 from "../assets/command4.png";
import command5 from "../assets/command5.png";
import plane from "../assets/plane.png";
import birds from "../assets/birds.png";
import "../styles/Feature.scss";

export default function Feature() {
  return (
    <>
      <Command
        noteText="Display Your Profile"
        headerText="Customized Profile For Users to See"
        paragraphText="Users can display a customized profile that shows their role, permissions, and date joined! Unique user ID is included to avoid copycats :)"
        btnText="Testing a longer bit of string text"
        imgSrc={command4}
        hideBtn={true}
      />
      <span className="feature__plane">
        <img src={plane} alt="plane" />
      </span>
      <Command
        reversed={true}
        noteText="Display Your Profile"
        headerText="Customized Profile For Users to See"
        paragraphText="Users can display a customized profile that shows their role, permissions, and date joined! Unique user ID is included to avoid copycats :)"
        btnText="See Docs"
        imgSrc={command2}
      />
      <Command
        noteText="Display Your Profile"
        headerText="Customized Profile For Users to See"
        paragraphText="Users can display a customized profile that shows their role, permissions, and date joined! Unique user ID is included to avoid copycats :)"
        imgSrc={command3}
        btnText="Learn More"
        hideBtn={true}
      />
      <Command
        reversed={true}
        noteText="Display Your Profile"
        headerText="Customized Profile For Users to See"
        paragraphText="Users can display a customized profile that shows their role, permissions, and date joined! Unique user ID is included to avoid copycats :)"
        btnText="Learn More"
        imgSrc={command5}
      />
    </>
  );
}
