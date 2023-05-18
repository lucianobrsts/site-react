import React from "react"
import '../assets/css/Card.css'
import cardDoisEsquerda from '../assets/image/cardDoisEsquerda.png'

function Card() {
    return (
        <div>
            <div className="cardDireita">
                <span className="subtitulo">
                    17 de maio de 2023
                </span>

                <p className="titulo">
                    Mega evento gamer...
                </p>

                <p className="paragrafo">
                Morbi non libero sit amet elit pulvinar ultricies at in leo.
                </p>
            </div>

            <div className="cardEsquerda">
                <a href="#">
                    <img src={cardDoisEsquerda} />
                </a>

                <a href="#">
                    <span className="linkNew">
                        New
                    </span>
                </a>

            </div>
        </div>
    )
}

export default Card