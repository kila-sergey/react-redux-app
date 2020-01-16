import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { Hamburger, Menu } from '../menu';
import {
	HOME_PAGE_PATH
} from '../../constants/router-constants';
import styles from './style.module.scss';

export default class AppHeader extends Component {

	state = {
		isOpened: false
	}

	toggleMenu = () => {
		this.setState({
			isOpened: !this.state.isOpened
		})
	}

	closeMenu = () => {
		this.setState({
			isOpened:false
		})
	}

	render() {
		return (
			<header className={styles.header}>
				<div className="container">
					<div className={styles.headerWrap}>
						<Link to={HOME_PAGE_PATH}>
							<span className={styles.logo}>
								<img src={logo} alt="React-App" className={styles.logoImage} />
							</span>
						</Link>
						<Hamburger onBurgerToggle={this.toggleMenu} isOpened={this.state.isOpened} />
						<Menu isOpened={this.state.isOpened} toggleMenu={this.toggleMenu} closeMenu={this.closeMenu}/>
					</div>
				</div>
			</header>
		)
	}
}
