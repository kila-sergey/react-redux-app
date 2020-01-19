import { combineReducers } from 'redux'
import usersList from './users-list';
import activeUser from './active-user';
import albumPhotos from './album-photos';
import postsPage from './posts-page';

export default combineReducers({
	usersList:usersList,
	activeUser:activeUser,
	albumPhotos:albumPhotos,
	postsPage: postsPage,
})

