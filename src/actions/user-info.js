const userIdRequested=(id)=>{
	return{
		type:'UPDATE_USER_ID',
		payload:id
	}
}

const userDataRequest = () => {
	return {
		type: 'FETCH_USERDATA_REQUEST'
	}
}

const userLoaded = (user) => {
	return {
		type: 'FETCH_USER_SUCCESS',
		payload: user
	}
}

const userFetchError = () => {
	return {
		type:'USER_PAGE_ERROR'
	}
}

const userFetchSuccess = () =>{
	return {
		type:'USER_PAGE_LOADED'
	}
}
export {
	userIdRequested,
	userDataRequest,
	userLoaded,
	userFetchError,
	userFetchSuccess
}