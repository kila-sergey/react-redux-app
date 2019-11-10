import updateUsersList from './update-users-list';

const reducer = (state, action) => {
	return{
		usersList:updateUsersList(state,action)
	}
}

export default reducer;