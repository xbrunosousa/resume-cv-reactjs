import React from 'react'
import styles from './App.scss'

function Education(props) {
	return (
	<div key={props.name}>
		<p className={styles.eduTitle}>{props.name}</p>
		<p className={styles.eduDate}>{props.date}</p>
		<p className={styles.eduDescript}>{props.description}</p>
	</div>
	)
}

export default Education