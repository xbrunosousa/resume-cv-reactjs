import React from 'react'
import styles from './App.scss'

function WorkExperience(props) {
	return (
		<div>
			<p className={styles.jobTitle}>{props.name}</p>
			<p className={styles.jobDate}>{props.date}</p>
			<p className={styles.jobDescript}>{props.description}</p>
		</div>
	)
}

export default WorkExperience