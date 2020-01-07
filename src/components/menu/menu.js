import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './menu.scss';

const Menu = ({ isOpened, toggleMenu, closeMenu }) => {
	return (
		<CSSTransition
			in={isOpened}
			timeout={{
				enter: 500,
				exit: 500
			}}
			classNames='menu'
			unmountOnExit={true}
			mountOnEnter={true}
			appear={true}>
			<React.Fragment>
				<ul className="menu">
					<li className="menu__item">
						<Link to="/users" className="menu__link" onClick={() => toggleMenu()}>Users</Link>
					</li>
					<li className="menu__item">2</li>
					<li className="menu__item">3</li>
				</ul>
				<div className="menu-overlay" onClick={() => closeMenu()}></div>
			</React.Fragment>
		</CSSTransition>
	)
}

export default Menu;