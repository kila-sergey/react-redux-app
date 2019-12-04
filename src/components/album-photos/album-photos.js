import React, { Component } from 'react';

class AlbumPhotos extends Component {
	
	render() {
		const {albumId} = this.props
		return (
			<>
				{albumId}
			</>
		)

	}
}

export default AlbumPhotos;