import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick }) => {
	return (
		<>
			<button
				className='button'
				onClick={onClick}>
				{name}
			</button>
		</>
	)
}


Button.defaultProps = {
	name: '',
	onCLick: () => { }
}

Button.propTypes = {
	name: PropTypes.string,
	onClick: PropTypes.func
}

export default Button;