import React, { useState, useEffect } from 'react'
import Column from "../Column/Column"
import { isEmpty } from 'lodash'
import "./BoardContent.scss"
import { initialData } from "../../actions/initialData"
import { mapOrder } from "../../utilies/sorts"

function BoardContent() {

	const [board, setBoard] = useState({})
	const [columns, setColumns] = useState([])

	useEffect(() => {
		const boardFromDB = initialData.boards.find(board => board.id === 'board-1');
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
	console.log("columns: ", columns)
	return (
		<>
			<div className="board-content">
				{columns.map((item, index) => {
					return (
						<Column key={index} column={item} />
					)
				})}
			</div>
		</>
	)
}

export default BoardContent
