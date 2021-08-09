import React from 'react'
import { mapOrder } from '../../utilies/sorts'
import Card from '../Card/Card'
import { Container, Draggable } from 'react-smooth-dnd'
import './Column.scss'

function Column(props) {
	const { column } = props
	const cards = mapOrder(column.cards, column.cardOrder, 'id')

	const onCardDrop = (dropResult) => {
		console.log('dropResult: ', dropResult)
	}

	return (
		<>
			<div className="column">
				<header className="column-drag-handle">
					{column.title}
				</header>
				<div className="card-list">
					<Container
						// onDragStart={e => console.log('drag started', e)}
						// onDragEnd={e => console.log('drag end', e)}
						// onDragEnter={() => {
						// 	console.log('drag enter:', column.id);
						// }}
						// onDragLeave={() => {
						// 	console.log('drag leave:', column.id);
						// }}
						// onDropReady={p => console.log('Drop ready: ', p)}
						groupName="long-columns"
						onDrop={onCardDrop}
						getChildPayload={index => cards[index]}
						dragClass="card-ghost"
						dropClass="card-ghost-drop"

						dropPlaceholder={{
							animationDuration: 150,
							showOnTop: true,
							className: 'card-drop-preview'
						}}
						dropPlaceholderAnimationDuration={200}
					>
						{
							cards.map((item, index) => {
								return (
									<Draggable key={index}>
										<Card card={item} />
									</Draggable>
								)
							})
						}
					</Container>
				</div>
				<footer>
					add card
				</footer>
			</div>
		</>
	)
}

export default Column
