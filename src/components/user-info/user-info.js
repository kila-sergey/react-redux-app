import React, { Component } from 'react';
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


class UserInfo extends Component {
	state = {
		addressDetails: false,
		companyDetails:false,
	}
	addressDetailsToggle = () => {
		this.setState({
			addressDetails: !this.state.addressDetails
		})
	}
	companyDetailsToggle = () => {
		this.setState({
			companyDetails:!this.state.companyDetails
		})
	}
	componentDidUpdate(prevProps) {
		const { testService, userId, onUserLoaded, onUserRequested } = this.props;
		if (prevProps.userId !== userId) {
			onUserRequested()
			testService.getUser(userId)
				.then(user => {
					setTimeout(() => {
						onUserLoaded(user)
					}, 500)
				})
		}
	}

	render() {
		const { loading, user } = this.props;
		const { addressDetails,companyDetails } = this.state;
		console.log(user)
		if (loading) {
			return <Spinner />
		}
		return (
			<div className={styles.userBox}>
				<img src={`../images/avatar-${user.id}.png`} className={styles.userAvatar} />
				<div className={styles.userInfo}>
					<div className={styles.name}>{user.name}</div>
					<UserItem parameter='user-name' value={user.username}/>
					<UserItem parameter='email' value={user.email}/>
					<UserItem parameter='address' value={user.address.city} hasDetails={true} detailsToggleFunc={this.addressDetailsToggle}/>
					{addressDetails &&
						<>
							<UserItemDetails parameter='street' value={user.address.street}/>
							<UserItemDetails parameter='suite' value={user.address.suite}/>
							<UserItemDetails parameter='zipcode:' value={user.address.zipcode}/>
						</>
					}
					<UserItem parameter='phone' value={user.phone}/>
					<UserItem parameter='website' value={user.website}/>
					<UserItem parameter='company' value={user.company.name} hasDetails={true} detailsToggleFunc={this.companyDetailsToggle}/>
					{companyDetails&&
						<>
							<UserItemDetails parameter='business' value={user.company.bs}/>
							<UserItemDetails parameter='tagline' value={user.company.catchPhrase}/>
						</>
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		userId: state.activeUser.userId,
		user: state.activeUser.user,
		loading: state.activeUser.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onUserRequested: () => dispatch(userRequested()),
		onUserLoaded: (user) => dispatch(userLoaded(user))
	}
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(UserInfo))