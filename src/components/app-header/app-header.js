import React from 'react';
import styles from './style.module.scss';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import Hamburger from '../menu';

const AppHeader = () => {
	return (
		<header className={styles.header}>
			<Link to="/">
				<span className={styles.logo}>
					<img src={logo} alt="React-App" className={styles.logoImage}/>
				</span>
			</Link>
			<Hamburger/>
		</header>
	)
}

export default AppHeader;