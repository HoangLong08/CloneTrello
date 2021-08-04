import React from 'react'
import { mapOrder } from "../../utilies/sorts"
import Card from '../Card/Card'
import "./Column.scss"

function Column(props) {
	const { column } = props;
	const cards = mapOrder(column.cards, column.cardOrder, 'id')
	
	return (
		<>
			<div className="column">
				<header>
					{column.title}
				</header>
				<ul className="card-list">
					{
						cards.map((item, index) => {
							return (
								<Card card={item} key={index} />
							)
						})
					}
					{/* <li className="card-item">
						lorem lorem lorem lorem lorem lorem lorem lorem lorem
					</li>
					<li className="card-item">
						lorem lorem lorem lorem lorem lorem lorem lorem lorem
					</li>
					<li className="card-item">
						lorem lorem lorem lorem lorem lorem lorem lorem lorem
					</li>
					<li className="card-item">
						lorem lorem lorem lorem lorem lorem lorem lorem lorem
					</li> */}

				</ul>
				<footer>
					add card
				</footer>
			</div>
		</>
	)
}

export default Column
