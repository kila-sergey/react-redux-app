const userAlbumsRequested = () => {
	return {
		type: 'FETCH_USER_ALBUMS_REQUEST'
	}
}

const userAlbumsLoaded = (albums) => {
	return {
		type: 'FETCH_USER_ALBUMS_SUCCESS',
		payload: albums
	}
}

export {
	userAlbumsRequested,
	userAlbumsLoaded,
}