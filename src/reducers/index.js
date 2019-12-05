import { combineReducers } from 'redux'
import updateUsersList from './update-users-list';
import updateActiveUser from './update-active-user';
import updateAlbumPhotos from './update-album-photos';

export default combineReducers({
	usersList:updateUsersList,
	activeUser:updateActiveUser,
	albumPhotos:updateAlbumPhotos
})

