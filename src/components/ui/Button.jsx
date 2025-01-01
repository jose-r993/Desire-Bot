import "../../styles/ui/Button.scss";

export default function Button({ className, text }) {
  return <button className={`button ${className}`}>{text}</button>;
}
