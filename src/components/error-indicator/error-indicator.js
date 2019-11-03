import React from 'react'

import icon from './error.svg';
import styles from './index.module.scss';

const ErrorIndicator = () => {
	return (
		<div className={styles.error}>
			<div className={styles.text}>Something get wrong</div>
			<img src={icon} alt="" className={styles.icon} />
		</div>
	)
}

export default ErrorIndicator;