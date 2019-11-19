import React, {Component} from 'react';
import withService from '../hoc';
import {connect} from 'react-redux';

import styles from './styles.module.scss';
import icon from './album-icon.svg';

class UserAlbums extends Component{
	render(){
		return(
			<ul className={styles.albums}>
				<li className={styles.album}>
					<img src={icon} alt="" className={styles.albumIcon}/>
					<span className={styles.albumName}>Album 1</span>
				</li>
			</ul>
			
		)
	}
}

export default withService()(connect(null,null)(UserAlbums))