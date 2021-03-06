import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
		const { albumId, testService, fetchPhotosSuccess, fetchPhotosRequest, fetchPhotosError } = this.props;
		if (prevProps.albumId !== albumId) {
			fetchPhotosRequest();
			testService.getAlbumPhotos(albumId)
				.then((photos) => {
					fetchPhotosSuccess(photos)
				})
				.catch(err=>{
					fetchPhotosError()
				})
		}

	}
	render() {
		const { photos , loading , error} = this.props;
		const photoList = photos.map(photo => {
			return <AlbumPhoto photo={photo} key={photo.id} />
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

AlbumPhotos.defaultProps = {
  photos: [],
}

AlbumPhotos.propTypes = {
  albumId:PropTypes.number,
  fetchPhotosSuccess: PropTypes.func,
  fetchPhotosError: PropTypes.func,
  fetchPhotosRequest: PropTypes.func,
  testService: PropTypes.object,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  photos: PropTypes.array,
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
		fetchPhotosRequest: () => { dispatch(albumPhotosRequested()) },
		fetchPhotosSuccess: (id) => { dispatch(albumPhotosLoaded(id)) },
		fetchPhotosError:()=>{dispatch(albumPhotosFailed())}
	}
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(AlbumPhotos));
