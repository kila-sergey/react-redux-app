import React from 'react';
import './menu.scss';

const Hamburger = ({ isOpened, onBurgerToggle }) => {
	let clazz = isOpened ? 'open' : '';
	return (
		<div id="nav-icon3" className={clazz} onClick={() => onBurgerToggle()}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default Hamburger;