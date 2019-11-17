import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import withService from '../hoc';
import { connect } from 'react-redux';
import {
	userRequested,
	userLoaded,
	userError
} from '../../actions'
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator/';
import UserItem from './user-item/';
import UserItemDetails from './user-item-details/';
import styles from './styles.module.scss';
import './styles.scss';


class UserInfo extends Component {
	state = {
		addressDetails: false,
		companyDetails: false,
	}

	addressDetailsToggle = () => {
		this.setState({
			addressDetails: !this.state.addressDetails
		})
	}

	companyDetailsToggle = () => {
		this.setState({
			companyDetails: !this.state.companyDetails
		})
	}

	componentDidUpdate(prevProps) {
		const { testService, userId, onUserLoaded, onUserRequested, onUserError } = this.props;
		if (prevProps.userId !== userId) {
			onUserRequested()
			testService.getUser(userId)
				.then(user => {
					onUserLoaded(user)
				})
				.catch(error => {
					onUserError()
				})
		}
	}

	render() {
		const { error, loading, user } = this.props;
		const { addressDetails, companyDetails } = this.state;
		console.log(user)
		if (loading) {
			return <Spinner />
		}
		if(error){
			return <ErrorIndicator/>
		}
		return (
			<div className={styles.userBox}>
				<img src={`../images/avatar-${user.id}.png`} className={styles.userAvatar} />
				<div className={styles.userInfo}>
					<div className={styles.name}>{user.name}</div>
					<UserItem parameter='user-name' value={user.username} />
					<UserItem parameter='email' value={user.email} />
					<UserItem parameter='address' value={user.address.city} hasDetails={true} detailsToggleFunc={this.addressDetailsToggle} />
					<Transition
						in={addressDetails}
						timeout={{
							enter: 100,
							exit: 400,
						}}
						unmountOnExit={true}
						mountOnEnter={true}>
						{
							(state) => (
								(
									<div className={`user-details-box user-details-box-${state}`}>
										<UserItemDetails parameter='street' value={user.address.street} />
										<UserItemDetails parameter='suite' value={user.address.suite} />
										<UserItemDetails parameter='zipcode:' value={user.address.zipcode} />
									</div>
								)
							)
						}
					</Transition>
					<UserItem parameter='phone' value={user.phone} />
					<UserItem parameter='website' value={user.website} />
					<UserItem parameter='company' value={user.company.name} hasDetails={true} detailsToggleFunc={this.companyDetailsToggle} />
					<Transition
						in={companyDetails}
						timeout={{
							enter: 100,
							exit: 500,
						}}
						unmountOnExit={true}
						mountOnEnter={true}>
						{
							(state) => (
								(
									<div className={`user-details-box user-details-box-${state}`}>
										<UserItemDetails parameter='business' value={user.company.bs} />
										<UserItemDetails parameter='tagline' value={user.company.catchPhrase} />
									</div>
								)
							)
						}
					</Transition>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		userId: state.activeUser.userId,
		user: state.activeUser.user,
		loading: state.activeUser.loading,
		error: state.activeUser.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onUserRequested: () => dispatch(userRequested()),
		onUserLoaded: (user) => dispatch(userLoaded(user)),
		onUserError: () => dispatch(userError()),
	}
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(UserInfo))