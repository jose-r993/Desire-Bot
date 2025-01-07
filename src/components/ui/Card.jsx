import { Link } from "react-router-dom"
import "../../styles/ui/Card.scss"

export default function Card({ bubble1, bubble2, title, paragraph, linkSrc }) {
    return (
        <Link to={linkSrc} className="card">
            <span className="card__bubble1">{bubble1}</span>
            <span className={`card__bubble2 ${!bubble2 && 'card__bubble2-hidden'}`}>{bubble2}</span>
            <h2 className="card__title">{title}</h2>
            <p className="card__paragraph">{paragraph}</p>
        </Link>
    )
}