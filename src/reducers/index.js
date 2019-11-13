import { combineReducers } from 'redux'
import updateUsersList from './update-users-list';
import updateActiveUser from './update-active-user';

export default combineReducers({
	usersList:updateUsersList,
	activeUser:updateActiveUser
})

