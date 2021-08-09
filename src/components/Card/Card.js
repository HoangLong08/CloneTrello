import React from 'react'
// import imgOne from '../../Assets/Images/2021-07-26_141728.370486.png'
import './Card.scss'
function Card(props) {
	const { card } = props

	return (
		<>
			<div className="card-item">
				{card.cover && <img src={card.cover} className="card-cover" alt="Hoang Long" onMouseDown={e => e.preventDefault()} />}
				{card.title}
			</div>
		</>
	)
}

export default Card
