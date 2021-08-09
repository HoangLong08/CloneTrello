import React, { useState, useEffect } from 'react'
import Column from '../Column/Column'
import { isEmpty } from 'lodash'
import './BoardContent.scss'
import { initialData } from '../../actions/initialData'
import { Container, Draggable } from 'react-smooth-dnd'
import { mapOrder } from '../../utilities/sorts'
import { applyDrag } from '../../utilities/dragDrop'

function BoardContent() {

	const [board, setBoard] = useState({})
	const [columns, setColumns] = useState([])

	useEffect(() => {
		const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
		if (boardFromDB) {
			setBoard(boardFromDB)

			setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnsOrder, 'id'))
		}
	}, [])
	if (isEmpty(board)) {
		return (
			<div className="not-found">
				Board not found
			</div>
		)
	}

	const onColumnDrop = (dropResult) => {
		let newColumns = [...columns]
		newColumns = applyDrag(newColumns, dropResult)

		let newBoard = { ...board }
		newBoard.columnsOrder = newColumns.map((item) => {
			return item.id
		})
		newBoard.columns = newColumns

		setColumns(newColumns)
		setBoard(newBoard)
	}

	const onCardDrop = (columnId, dropResult) => {
		if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
			let newColumns = [...columns]
			let currentColumn = newColumns.find(c => c.id === columnId)

			currentColumn.cards = applyDrag(currentColumn.cards, dropResult)
			currentColumn.cardOrder = currentColumn.cards.map(i => i.id)

			setColumns(newColumns)
		}
	}

	return (
		<>
			<div className="board-content">
				<Container
					orientation="horizontal" // chiều ngang hay doc các element
					onDrop={onColumnDrop}
					getChildPayload={index =>
						columns[index]
					}
					dragHandleSelector=".column-drag-handle" // chỉ thị vùng kéo
					dropPlaceholder={{
						animationDuration: 150,
						showOnTop: true,
						className: 'column-drop-preview'
					}}
				>
					{columns.map((item, index) => {
						return (
							<Draggable key={index}>
								<Column column={item} onCardDrop={onCardDrop} />
							</Draggable>
						)
					})}
				</Container>
				<div className="add-new-column">
					<i className="fa fa-plus icon" /> add another column
				</div>
			</div>
		</>
	)
}

export default BoardContent
