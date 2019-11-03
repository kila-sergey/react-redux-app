import React from 'react';

import {ServiceConsumer} from '../service-context';;

const withService = () => (Wrapper) =>{
	return(props)=>{
		return (
			<ServiceConsumer>
				{
					(testService)=>{
						return(
							<Wrapper {...props} testService={testService}/>
						)
					}
				}
			</ServiceConsumer>
		)
	}
}

export default withService;