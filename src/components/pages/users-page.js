import React from 'react';
import UsersList from '../users-list';
import {withRouter} from 'react-router-dom';

const UsersPage=({history})=>{
	return(
		<div className="container">
			<UsersList onUserSelected={(userId)=>{
				history.push(`/users/${userId}`)
			}}/>
		</div>
	)
}

export default withRouter(UsersPage);