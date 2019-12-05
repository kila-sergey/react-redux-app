import React, { Component } from 'react';
import { connect } from 'react-redux';
import withService from '../hoc/';

import AlbumPhoto from './album-photo/';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import {
	albumPhotosRequested,
	albumPhotosLoaded,
	albumPhotosFailed
} from '../../actions';

import styles from './styles.module.scss';

class AlbumPhotos extends Component {
	componentDidUpdate(prevProps) {
		const { albumId, testService, fetchPhotosSuccess, fetchPhotoRequest, fetchPhotosError } = this.props;
		if (prevProps.albumId !== albumId) {
			fetchPhotoRequest();
			testService.getAlbumPhotos(albumId)
				.then((photos) => {
					console.log(photos)
					fetchPhotosSuccess(photos)
				})
				.catch(err=>{
					fetchPhotosError()
				})
		}

	}
	render() {
		const { photos = [] , loading , error} = this.props;
		const photoList = photos.map(photo => {
			return <AlbumPhoto photo={photo} />
		})

		if(error){
			return <ErrorIndicator/>
		}
		return (
			<div className={styles.photos}>
				{
					loading?<Spinner/>:photoList
				}
			</div>
		)

	}
}

const mapStateToProps = (state) => {
	return {
		photos: state.albumPhotos.photos,
		loading: state.albumPhotos.loading,
		error: state.albumPhotos.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPhotoRequest: () => { dispatch(albumPhotosRequested()) },
		fetchPhotosSuccess: (id) => { dispatch(albumPhotosLoaded(id)) },
		fetchPhotosError:()=>{dispatch(albumPhotosFailed())}
	}
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(AlbumPhotos));