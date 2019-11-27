const userAlbumsLoaded = (albums) => {
	return {
		type: 'FETCH_USER_ALBUMS_SUCCESS',
		payload: albums
	}
}

export {
	userAlbumsLoaded,
}