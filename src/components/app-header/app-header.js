import React from 'react';
import styles from './style.module.scss';
import {Link} from 'react-router-dom';
import logo from './logo.svg'

const AppHeader = () => {
	return (
		<header>
			<Link to="/">
				<span className={styles.logo}>
					<img src={logo} alt="React-App" className={styles.logoImage}/>
				</span>
			</Link>
		</header>
	)
}

export default AppHeader;