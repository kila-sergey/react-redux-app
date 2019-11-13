import React,{Component} from 'react';
import withService from '../hoc';
import {connect} from 'react-redux';
import {userRequested,
		userLoaded,
		userError} from '../../actions'
import Spinner from '../spinner/';
import ErrorIndicator from '../error-indicator/';
import styles from './styles.module.scss';
class UserInfo extends Component {

	componentDidUpdate (prevProps) {
		const {testService,userId,onUserLoaded,onUserRequested}=this.props;
		if(prevProps.userId!==userId){
			onUserRequested()
			testService.getUser(userId)
				.then(user=>{
					setTimeout(()=>{
						onUserLoaded(user)
					},500)
				})
		}
	}

	render(){
		const {loading,user} = this.props;
		if(loading){
			return <Spinner/>
		}
		return(
			<div className={styles.userBox}>
				<img src={`../images/avatar-${user.id}.png`} className={styles.userAvatar}/>
				<div>2</div>
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return{
		userId:state.activeUser.userId,
		user:state.activeUser.user,
		loading:state.activeUser.loading
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		onUserRequested:()=>dispatch(userRequested()),
		onUserLoaded:(user)=>dispatch(userLoaded(user))
	}
}

export default withService()(connect(mapStateToProps,mapDispatchToProps)(UserInfo))