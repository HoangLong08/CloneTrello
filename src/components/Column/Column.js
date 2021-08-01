import React from 'react'

import Task from '../Task/Task'
import "./Column.scss"

function Column() {
	return (
		<>
			<div className="column">
				<header>
					Brainstorm
				</header>
				<ul className="task-list">

					<Task />
					<li className="task-item">
						lorem lorem lorem lorem lorem lorem lorem lorem lorem
					</li>
					<li className="task-item">
						lorem lorem lorem lorem lorem lorem lorem lorem lorem
					</li>
					<li className="task-item">
						lorem lorem lorem lorem lorem lorem lorem lorem lorem
					</li>
					<li className="task-item">
						lorem lorem lorem lorem lorem lorem lorem lorem lorem
					</li>

				</ul>
				<footer>
					add card
				</footer>
			</div>
		</>
	)
}

export default Column
