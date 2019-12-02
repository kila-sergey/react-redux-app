import React from 'react';

import styles from './styles.scss';

const Modal = ({closeModal,isModalOpen}) => {
	console.log(isModalOpen)
	let modalClassName=isModalOpen?'modal opened':'modal';
	return(
		<div className={modalClassName}>
			<div className='modal-overlay' onClick={()=>closeModal()}></div>
		</div>
	)
}

export default Modal;