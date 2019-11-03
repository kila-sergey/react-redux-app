const updateUsersList = (state,action) =>{
	if(state===undefined){
		return {
			users:[],
			loading:true,
			error:false
		}
	}
	switch(action.type){
		case 'FETCH_USERS_REQUEST':
			return {
				users:state.users,
				loading:true,
				error:false
			}
		case 'FETCH_USERS_ERROR':
			return{
				users:state.users,
				loading:false,
				error:true
			}
		case  'FETCH_USERS_SUCCESS':
			return{
				users:action.payload,
				loading:false,
				error:false
			}
		default:
			return{
				users:state.users,
				loading:state.loading,
				error:state.error
			}
	}
}

export default updateUsersList;