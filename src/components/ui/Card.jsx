import ButtonTwo from "./ButtonTwo"
import "../../styles/ui/Card.scss"
import { span } from "framer-motion/client"

export default function Card({ bubble1, bubble2, title, paragraph }) {
    return (
        <div className="card">
            <span className="card__bubble1">{bubble1}</span>
            <span className={`card__bubble2 ${!bubble2 && 'card__bubble2-hidden'}`}>{bubble2}</span>
            <h2 className="card__title">{title}</h2>
            <p className="card__paragraph">{paragraph}</p>
            <ButtonTwo className="card__btn" text="Learn More"/>
        </div>
    )
}