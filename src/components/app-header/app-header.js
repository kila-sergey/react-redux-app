import React, { Component } from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { Hamburger, Menu } from '../menu';

export default class AppHeader extends Component {

	state = {
		isOpened: false
	}

	toggleBurger = () => {
		this.setState({
			isOpened: !this.state.isOpened
		})
	}

	render() {
		return (
			<header className={styles.header}>
				<div className="container">
					<div className={styles.headerWrap}>
						<Link to="/">
							<span className={styles.logo}>
								<img src={logo} alt="React-App" className={styles.logoImage} />
							</span>
						</Link>
						<Hamburger onBurgerToggle={this.toggleBurger} isOpened={this.state.isOpened} />
						<Menu isOpened={this.state.isOpened} toggleMenu={this.toggleBurger} />
					</div>
				</div>
			</header>
		)
	}
}
