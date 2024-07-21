import "../styles/ButtonTwo.scss";

export default function ButtonTwo({ className, text }) {
  return <button className={`buttonTwo ${className}`}>{text}</button>;
}
