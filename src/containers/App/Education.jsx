import React from 'react'

function Education(props) {
	return (
	<div key={props.name}>
		<p className="eduTitle">{props.name}</p>
		<p className="eduDate">{props.date}</p>
		<p className="eduDescript">{props.description}</p>
	</div>
	)
}

export default Education