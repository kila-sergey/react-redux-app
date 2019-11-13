import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userIdRequested} from '../../actions';

import UserInfo from '../user-info';

class UserPage extends Component{
	
	componentDidMount(){
		const {userId,updateUserId}=this.props;
		updateUserId(userId)
	}

	render(){
		return(
			<div className="container">
				<UserInfo/>
			</div>
		)
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		updateUserId:(id)=>dispatch(userIdRequested(id))
	}
}
export default connect(null,mapDispatchToProps)(UserPage);