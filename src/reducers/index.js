import updateUsersList from './update-users-list';
import updateActiveUser from './update-active-user';

const reducer = (state, action) => {
	return {
		usersList: updateUsersList(state, action),
		activeUser:updateActiveUser(state,action)
	}
}

export default reducer;