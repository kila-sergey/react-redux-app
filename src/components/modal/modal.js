import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const Modal = ({ closeModal, isModalOpen, children }) => {
	return (
		<div className={classnames('modal', { 'opened': isModalOpen })}>
			<div className='modal-overlay' onClick={() => closeModal()}></div>
			{children}
		</div>
	)
}

export default Modal;