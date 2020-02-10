import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './menu.scss';

const Hamburger = ({ isOpened, onBurgerToggle }) => {
	return (
		<div id="nav-icon3" className={classnames({'open' : isOpened})} onClick={() => onBurgerToggle()}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

Hamburger.propTypes = {
  isOpened: PropTypes.bool,
  onBurgerToggle: PropTypes.func.isRequired
}

export default Hamburger;
