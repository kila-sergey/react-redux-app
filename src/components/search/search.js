import React, {Fragment} from 'react';
import styles from './style.module.scss'

const Search = ({onChange, value}) => {
	return(
		<Fragment>
			<input 
				type="text" 
				className={styles.search} 
				value={value} 
				onChange={(e)=>onChange(e)}/>
		</Fragment>
	)
}


export default Search;