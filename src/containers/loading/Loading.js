import React from 'react'
import styles from './Loading.scss'
import gifLoading from '../../assets/loading.gif'

// Display gif loading in load api data

function Loading(){
	return (
		<div className={styles.loadingScreen}>
			<img src={gifLoading} alt="Carregando dados..." />
		</div>
	)
}

export default Loading