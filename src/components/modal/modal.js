import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const Modal = ({ closeModal, isModalOpen, children }) => {
	return (
		<div className={classnames(styles.modal, { [styles.modalOpened]: isModalOpen })}>
			<div className={styles.modalOverlay} onClick={() => closeModal()}></div>
			{children}
		</div>
	)
}

export default Modal;