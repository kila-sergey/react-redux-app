import React from 'react';
import styles from './style.module.scss';

const Welcome = ({value}) => {
	return (
		<div className={styles.welcome}>{value}</div>
	)
}

export default Welcome;