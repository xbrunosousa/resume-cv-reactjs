import React from 'react'
import styles from './Loading.scss'

// Display gif loading in load api data

function Loading(){
	return (
		<div className={styles.divLoadingScreen}>
			<div className={styles.loadingScreen}></div>
		</div>
	)
}

export default Loading