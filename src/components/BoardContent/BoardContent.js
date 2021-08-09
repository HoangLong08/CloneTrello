import React, { useState, useEffect } from 'react'
import Column from '../Column/Column'
import { isEmpty } from 'lodash'
import './BoardContent.scss'
import { initialData } from '../../actions/initialData'
import { Container, Draggable } from 'react-smooth-dnd'
import { mapOrder } from '../../utilies/sorts'

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
		console.log('dropResult: ', dropResult)
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
								<Column column={item} />
							</Draggable>
						)
					})}
				</Container>
			</div>
		</>
	)
}

export default BoardContent
