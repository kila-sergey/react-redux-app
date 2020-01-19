const initialState = {
	photos:[],
	loading:true,
	error:false,
}

const updateAlbumPhotos = (state=initialState, action) => {
	switch (action.type){
		case 'FETCH_ALBUM_PHOTOS_SUCCESS':
			return {
				...state,
				loading:false,
				photos:action.payload
			}
		case 'FETCH_ALBUMS_PHOTOS':
			return {
				...state,
				loading:true,
			}
		case 'FETCH_ALBUM_PHOTOS_ERROR':
			return{
				...state,
				loading:false,
				error:true
			}
		default:
			return {
				...state
			}
	}
}

export default updateAlbumPhotos;