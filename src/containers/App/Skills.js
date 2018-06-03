import React from 'react'
import styles from './App.scss'
import {Progress} from 'reactstrap'

function Skills(props) {
	return (
		<div key={props.index}>
			<p className={styles.titleSkill}>{props.name}</p>
			<Progress color="white"
				className={styles.progressBar} value={props.value.replace(/%/, '')} />
		</div>
	)
}

export default Skills