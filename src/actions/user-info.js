const userIdRequested=(id)=>{
	return{
		type:'UPDATE_USER_ID',
		payload:id
	}
}

export {
	userIdRequested
}