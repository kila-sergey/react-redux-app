const updateMenu = (state,action)=>{
	if(state===undefined){
		return {
			isOpened:false
		}
	}
	switch(action.type){
		case 'MENU_CLICK':
			return{
				isOpened:!state.isOpened
			}
		default:
			return{
				isOpened:false
			}
	}
}

export default updateMenu;