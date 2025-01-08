import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import "../styles/GuidePage.scss";

export default function GuidePage() {
  return (
    <main className="guide">
      <Button className="guide__btn" text="Add Bot" />
      <section className="guide__hero">
        <div className="guide__hero__container">
          <h1 className="guide__hero__header">Welcome To Desire's Guides</h1>
          <p className="guide__hero__paragraph">
            Find the best ways to maximize the most out of Desire with our user
            guides. Learn about how to get started with Desire, or visit our
            reccomended guides in both video and written formats.{" "}
          </p>
        </div>
        <img
          className="guide__hero__image"
          src="src/assets/sitting.png"
          alt="Standing Robot"
        />
      </section>
      <section className="guide__getStarted">
        <h2 className="guide__header">Get Started</h2>
        <p className="guide__paragraph">
          Learn about how to get started with Desire and get the most out of
          your server
        </p>
        <div className="guide__container">
          <Card
            title="Increasing Rankings with Desire"
            paragraph={`Take a look at our state of the art replication of Tony Big Head Tiger. Boost your server into the moon with Tonys big head. Our big data analytics can help propel your server and put it at the top of the reccomended servers.`}
            bubble1="Over the Rainbow"
            bubble2="Current Podcast"
          />
          <Card
            title="Increasing Rankings with Desire"
            paragraph={`Boost your server into the moon with Tonys big head. Our big data analytics can help propel your server and put it at the top of the reccomended servers.`}
            bubble1="Events"
          />
          <Card
            title="Increasing Rankings with Desire"
            paragraph={`Take a look at our state of the art replication of Tony Big Head Tiger. Boost your server into the moon with Tonys big head. Our big data analytics can help propel your server and put it at the top of the reccomended servers.`}
            bubble1="Events"
            bubble2="Current Podcast"
          />
        </div>
      </section>
      <section className="guide__reccomendedGuide">
        <h2 className="guide__header">Reccomended Guides</h2>
        <p className="guide__paragraph">
          See the guides that are most popular for our current users
        </p>
        <div className="guide__container">
          <Card
            title="Increasing Rankings with Desire"
            paragraph={`Take a look at our state of the art replication of Tony Big Head Tiger. Boost your server into the moon with Tonys big head. Our big data analytics can help propel your server and put it at the top of the reccomended servers.`}
            bubble1="Over the Rainbow"
            bubble2="Current Podcast"
          />
          <Card
            title="Increasing Rankings with Desire"
            paragraph={`Boost your server into the moon with Tonys big head. Our big data analytics can help propel your server and put it at the top of the reccomended servers.`}
            bubble1="Events"
          />
          <Card
            title="Increasing Rankings with Desire"
            paragraph={`Take a look at our state of the art replication of Tony Big Head Tiger. Boost your server into the moon with Tonys big head. Our big data analytics can help propel your server and put it at the top of the reccomended servers.`}
            bubble1="Events"
            bubble2="Current Podcast"
          />
        </div>
      </section>
      <section className="guide__videoGuide">
        <h2 className="guide__header">Video Guides</h2>
        <p className="guide__paragraph">
          Want a video format instead? See the videos we have made for our
          various platforms
        </p>
        <div className="guide__container">
          <Card
            title="Increasing Rankings with Desire"
            paragraph={`Take a look at our state of the art replication of Tony Big Head Tiger. Boost your server into the moon with Tonys big head. Our big data analytics can help propel your server and put it at the top of the reccomended servers.`}
            bubble1="Over the Rainbow"
            bubble2="Current Podcast"
          />
          <Card
            title="Increasing Rankings with Desire"
            paragraph={`Boost your server into the moon with Tonys big head. Our big data analytics can help propel your server and put it at the top of the reccomended servers.`}
            bubble1="Events"
          />
          <Card
            title="Increasing Rankings with Desire"
            paragraph={`Take a look at our state of the art replication of Tony Big Head Tiger. Boost your server into the moon with Tonys big head. Our big data analytics can help propel your server and put it at the top of the reccomended servers.`}
            bubble1="Events"
            bubble2="Current Podcast"
          />
        </div>
      </section>
    </main>
  );
}
