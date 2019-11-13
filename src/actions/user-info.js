const userIdRequested=(id)=>{
	return{
		type:'UPDATE_USER_ID',
		payload:id
	}
}

const userRequested = () => {
	return {
		type: 'FETCH_USER_REQUEST'
	}
}

const userLoaded = (user) => {
	return {
		type: 'FETCH_USER_SUCCESS',
		payload: user
	}
}

const userError = () => {
	return {
		type:'FETCH_USER_ERROR'
	}
}

export {
	userIdRequested,
	userRequested,
	userLoaded,
	userError
}