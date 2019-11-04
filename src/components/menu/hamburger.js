import React from 'react';
import {connect} from 'react-redux';
import {menuClick} from '../../actions';
import './menu.scss';

const Hamburger = ({isOpened,toggleMenu}) => {
	let clazz=isOpened?'open':'';
	return (
		<div id="nav-icon3" className={clazz} onClick={()=>toggleMenu()}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

const mapStateToProps=(state)=>{
	return{
		isOpened:state.menu.isOpened
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		toggleMenu:()=>{
			console.log('toggle')
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Hamburger);