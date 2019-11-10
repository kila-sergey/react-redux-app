import React from 'react';
import {Link} from 'react-router-dom';
import './menu.scss';

const Menu=({isOpened,toggleMenu})=>{
	let clazz=isOpened?'menu opened':'menu';
	return(
		<ul className={clazz}>
			<li className="menu__item">
				<Link to="/users" className="menu__link" onClick={()=>toggleMenu()}>Users</Link>
			</li>
			<li className="menu__item">2</li>
			<li className="menu__item">3</li>
		</ul>
	)
}

export default Menu;