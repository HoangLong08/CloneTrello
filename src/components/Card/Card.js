import React from 'react'
import imgOne from "../../Assets/Images/2021-07-26_141728.370486.png";
import "./Card.scss"
function Card(props) {
	const { card } = props

	return (
		<>
			<li className="card-item">
				{card.cover && <img src={card.cover} className="card-cover" alt="Hoang Long" />}
				{card.title}
			</li>
		</>
	)
}

export default Card
