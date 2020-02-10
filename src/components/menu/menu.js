import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {
	USERS_PAGE_PATH,
	POSTS_PAGE_PATH
} from '../../constants/router-constants';
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
						<Link to={USERS_PAGE_PATH} className="menu__link" onClick={() => toggleMenu()}>Users</Link>
					</li>
					<li className="menu__item">
						<Link to={POSTS_PAGE_PATH} className="menu__link" onClick={() => toggleMenu()}>Posts</Link>
					</li>
				</ul>
				<div className="menu-overlay" onClick={() => closeMenu()}></div>
			</React.Fragment>
		</CSSTransition>
	)
}

Menu.propTypes = {
  isOpened: PropTypes.bool,
  toggleMenu: PropTypes.func,
  closeMenu: PropTypes.func,
}

export default Menu;
