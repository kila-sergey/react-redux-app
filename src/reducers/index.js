import updateUsersList from './update-users-list';
import updateMenu from './update-menu'

const reducer = (state, action) => {
	return{
		usersList:updateUsersList(state,action),
		menu:updateMenu(state,action),
	}
}

export default reducer;