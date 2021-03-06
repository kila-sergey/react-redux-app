const albumPhotosRequested = () =>{
	return {
		type:'FETCH_ALBUMS_PHOTOS'
	}
}

const albumPhotosLoaded = (photos) => {
	return {
		type: 'FETCH_ALBUM_PHOTOS_SUCCESS',
		payload: photos
	}
}

const albumPhotosFailed = () =>{
	return {
		type: 'FETCH_ALBUM_PHOTOS_ERROR'
	}
}

export {
	albumPhotosRequested,
	albumPhotosLoaded,
	albumPhotosFailed
}