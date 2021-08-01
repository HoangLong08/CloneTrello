import React from 'react'
import imgOne from "../../Assets/Images/2021-07-26_141728.370486.png";
import "./Task.scss"
function Task() {
	return (
		<>
			<li className="task-item"><img src={imgOne} alt="Hoang Long" /> Title: Hoang Long</li>
		</>
	)
}

export default Task
